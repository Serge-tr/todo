let React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery');

let TodoList = require('TodoList');

describe('TodoList', () => {
    it('Should exist', () => {
        expect(TodoList).toExist();
    });
});