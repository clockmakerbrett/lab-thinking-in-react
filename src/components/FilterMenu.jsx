import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FilterMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      stockedOnly: false,
    };
  }
  handleChange = (query) => {
    const filterTerm = query.toLowerCase();
    const filterResults = this.props.data.filter((product) => {
      return product.name.toLowerCase().includes(filterTerm);
    });
    this.setState({
      data: filterResults,
    });
  };
  handleCheck = () => {
    if (!this.state.stockedOnly) {
      const filterResults = this.state.data.filter((product) => {
        return product.stocked === true;
      });
      this.setState({
        data: filterResults,
        stockedOnly: !this.state.stockedOnly,
      });
    } else {
      this.setState({
        data: this.props.data,
        stockedOnly: !this.state.stockedOnly,
      });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>IronStore</h1>
        <SearchBar
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
        />
        <ProductTable data={this.state.data} />
      </div>
    );
  }
}

export default FilterMenu;
