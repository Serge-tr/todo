let React = require('react');

let TodoSearch = React.createClass({
    handleSearch: function () {
        let showCompleted = this.refs.showCompleted.checked,
            searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },
    render: function () {
        return (
          <div>
              <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
              <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          </div>
        )
    }
});

module.exports = TodoSearch;
