let React = require('react'),
    TodoList = require('TodoList');

let TodoApp = React.createClass({
    getInitialState: function(){
        return {
            todos: [
                {id: 1, text: 'Fuck the dog'},
                {id: 2, text: 'Fuck the cat'}
            ]
        }
    },
    render: function () {
        let {todos} = this.state;
    return (
      <div>
          <TodoList todos={todos}/>
      </div>
    )
    }
});

module.exports = TodoApp;
