let React = require('react'),
    ReactDOM = require('react-dom');
let {Provider} = require('react-redux');
let {Route, Router, IndexRoute, hashHistory} = require('react-router');

let TodoApp = require('TodoApp'),
    actions = require('actions'),
    store = require('configureStore').configure();

store.subscribe(() => {
    console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean your ass'));
store.dispatch(actions.setSearchText('afjbvns'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
      <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
