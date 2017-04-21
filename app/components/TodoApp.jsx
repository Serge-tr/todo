let React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch')

let TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {id: 1, text: 'Fuck the dog'},
                {id: 2, text: 'Fuck the cat'},
                {id: 3, text: 'Fuck the girl'},
                {id: 4, text: 'Fuck the boy'}
            ]
        }
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted,
            searchText: searchText.toLowerCase()
        })
    },
    render: function () {
        let {todos} = this.state;

        return (
          <div>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={todos}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        )
    }
});

module.exports = TodoApp;
