import React from 'react';
import { Redirect } from 'react-router-dom';

function CardCategory({ collections, number }) {
  // Access Token
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{collections.name}</td>
        <td>{collections.created_at}</td>
        <td>{collections.update_at}</td>
        <td>
          <img src={`http://localhost:3001/collections/${collections.images}`} width="50%" />
        </td>
      </tr>
    </>
  );
}

export default CardCategory;
