import React from 'react';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

function CardCategory({ collections, number }) {
  // Forma Datet
  const dateFormatedCreate = moment(collections.created_at).subtract(10, 'days').calendar();
  const dateFormatedUpdate = moment(collections.update_at).subtract(10, 'days').calendar();
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
        <td>{dateFormatedCreate}</td>
        <td>{dateFormatedUpdate}</td>
        <td>
          <img src={`http://localhost:3001/collections/${collections.images}`} width="50%" />
        </td>
      </tr>
    </>
  );
}

export default CardCategory;
