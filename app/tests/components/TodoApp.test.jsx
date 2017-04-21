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
});