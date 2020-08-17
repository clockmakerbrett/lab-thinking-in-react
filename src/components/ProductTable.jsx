import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductTable extends Component {
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((row) => {
              return <ProductRow key={row.name} data={row} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;
