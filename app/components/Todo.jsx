let React = require('react'),
    moment = require('moment');

let Todo = React.createClass({
    render: function () {
        let {id, text, completed, createdAt, completedAt} = this.props;
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
            this.props.onToggle(id);
          }}>
              <input type="checkbox" checked={completed}/>
              <p>{text}</p>
              <p>{renderDate()}</p>
          </div>
        )
    }
});

module.exports = Todo;
