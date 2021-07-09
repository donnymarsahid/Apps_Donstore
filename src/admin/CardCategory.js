import React from 'react';

function CardCategory({ category, number }) {
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
