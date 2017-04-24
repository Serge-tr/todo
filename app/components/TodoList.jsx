let React = require('react'),
    Todo = require('Todo');

let TodoList = React.createClass({
    render: function () {
        let {todos} = this.props,
            renderTodos = () => {
                return todos.map((todo) => {
                    return (
                      <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
                    );
                });
            };

        return (
          <div>
              {renderTodos()}
          </div>
        )
    }
});

module.exports = TodoList;
