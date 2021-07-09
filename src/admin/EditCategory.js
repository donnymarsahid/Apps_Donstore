import React from 'react';
import api from '../api/database';
import { Link, Redirect } from 'react-router-dom';

function CardCategory({ category, number, refresh }) {
  // Access Token
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }

  async function deleted() {
    if (window.confirm('Are You Sure ?')) {
      await api.delete(`/delete/${category.id_category}`);
      return refresh();
    }
  }
  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{category.name}</td>
        <td>
          <Link to={`/editCategory/${category.id_category}`} class="btn btn-primary">
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

export default CardCategory;
