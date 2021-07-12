import React from 'react';
import { Redirect } from 'react-router-dom';

function CardCategory({ category, number }) {
  // Access Token
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{category.name}</td>
        <td>{category.created_at}</td>
        <td>{category.update_at}</td>
        <img src={`http://localhost:3001/category/${category.images}`} width="50%" />
      </tr>
    </>
  );
}

export default CardCategory;
