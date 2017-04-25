let React = require('react'),
    uuid = require('node-uuid'),

    TodoList = require('TodoList'),
    AddTodo = require('AddTodo'),
    TodoSearch = require('TodoSearch'),
    TodoAPI = require('TodoAPI');


let TodoApp = React.createClass({
    getInitialState: function(){
        return {
            showCompleted: false,
            searchText: "",
            todos: TodoAPI.getTodos()
        }
    },
    componentDidUpdate: function () {
        TodoAPI.setTodos(this.state.todos);
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
        let {todos, showCompleted, searchText} = this.state;
        let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

        return (
          <div>
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
          </div>
        )
    }
});

module.exports = TodoApp;
