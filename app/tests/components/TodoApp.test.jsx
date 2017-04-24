let React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery');

let TodoApp = require('TodoApp');

describe('TodoApp', () => {
    it('Should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state', () => {
       let todoText = 'test text',
           todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

       todoApp.setState({todos: []});
       todoApp.handleAddTodo(todoText);

       expect(todoApp.state.todos[0].text).toBe(todoText);
    });

});