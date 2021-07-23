import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

function CardCategory({ category, number }) {
  // Format Date
  const dateFormatedCreate = moment(category.created_at).subtract(10, 'days').calendar();
  const dateFormatedUpdate = moment(category.update_at).subtract(10, 'days').calendar();
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
        <td>{dateFormatedCreate}</td>
        <td>{dateFormatedUpdate}</td>
        <img src={`http://localhost:3001/category/${category.images}`} width="50%" alt={category.images} />
      </tr>
    </>
  );
}

export default CardCategory;
