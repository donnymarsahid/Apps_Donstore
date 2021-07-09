import React from 'react';
import api from '../api/database';
import { Link } from 'react-router-dom';

function CardCategory({ category, number, refresh }) {
  async function deleted() {
    await api.delete(`/delete/${category.id_category}`);
    return refresh();
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
