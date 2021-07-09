import React from 'react';
import { Redirect } from 'react-router-dom';

function CardCategory({ category, number }) {
  // Access Token
  const token = localStorage.getItem('token');
  if (!token) {
    return <Redirect to="/login" />;
  }
  console.log(number);
  return (
    <>
      <tr>
        <td>{number}</td>
        <td>{category.name}</td>
        <td>{category.created_at}</td>
        <td>{category.update_at}</td>
      </tr>
    </>
  );
}

export default CardCategory;
