let React = require('react'),
    moment = require('moment');

let Todo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props;
        let todoClassName = completed ? 'todo todo-completed' : 'todo';
        let renderDate = () => {
            let message = 'Created ',
                time = createdAt;

            if (completed) {
                message = "Completed ";
                time = completedAt;
            }

            return message + moment.unix(time).format('MMM Do YY, h:mm a');
        };

        return (
          <div className={todoClassName} onClick={() => {
            this.props.onToggle(id);
          }}>
              <div>
                <input type="checkbox" checked={completed}/>
              </div>
              <div>
                  <p>{text}</p>
                  <p className="todo__subtext">{renderDate()}</p>
              </div>
          </div>
        )
    }
});

module.exports = Todo;
