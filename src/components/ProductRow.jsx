import React from 'react';

const ProductRow = (props) => {
  return (
    <tr>
      <td>
        <span style={{ color: props.data.stocked ? 'black' : 'red' }}>
          {props.data.name}
        </span>
      </td>
      <td>
        <span>{props.data.price}</span>
      </td>
    </tr>
  );
};

export default ProductRow;
