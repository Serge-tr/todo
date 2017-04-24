let React = require('react'),
    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    uuid = require('node-uuid');

let TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: "",
            todos: [
                {id: uuid(), text: 'Fuck the dog', completed: true},
                {id: uuid(), text: 'Kiss the cat', completed: true},
                {id: uuid(), text: 'Rape the girl', completed: false},
                {id: uuid(), text: 'Kick the boy', completed: false}
            ]
        }
    },
    handleAddTodo: function (text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: uuid(),
                    text: text,
                    completed: false
                }
            ]
        });
    },
    handleToggle: function (id) {
        let updatedTodos = this.state.todos.map((todo) => {
            if(todo.id === id){
                todo.completed = !todo.completed;
            }

           return todo;
        });

        alert(id);
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
              <TodoList todos={todos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        )
    }
});

module.exports = TodoApp;
