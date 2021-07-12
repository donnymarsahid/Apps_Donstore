import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import api from '../../api/database';

function EditCollections({ collections, number, refresh }) {
  // Access Token
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  async function deleted() {
    if (window.confirm('Are You Sure ?')) {
      await api.delete(`/deleteCollect/${collections.id_collection}`);
      return refresh();
    }
  }
  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{collections.name}</td>
        <td>
          <Link to={`/editCollections/${collections.id_collection}`} class="btn btn-primary">
            Edit
          </Link>
          <button class="btn btn-danger" onClick={deleted}>
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default EditCollections;
