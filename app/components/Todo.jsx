let React = require('react'),
    moment = require('moment');
let {connect} = require('react-redux');
let actions = require('actions');

let Todo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt, dispatch} = this.props;
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
          <div onClick={() => {
            dispatch(actions.toggleTodo(id));
          }}>
              <input type="checkbox" checked={completed}/>
              <p>{text}</p>
              <p>{renderDate()}</p>
          </div>
        )
    }
});

module.exports = connect(

)(Todo);
