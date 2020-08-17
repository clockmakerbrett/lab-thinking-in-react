import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="form-container">
        <form>
          <label for="filter-input">Filter products: </label>
          <input
            id="filter-input"
            className="form-group"
            type="text"
            placeholder="Search..."
            onChange={(event) => this.props.handleChange(event.target.value)}
          />
          <label for="in-stock-input">
            Show only in-stock products:{' '}
            <input
              id="in-stock-input"
              type="checkbox"
              onChange={this.props.handleCheck}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
