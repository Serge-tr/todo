let React = require('react'),
    ReactDOM = require('react-dom'),
    TestUtils = require('react-addons-test-utils'),
    expect = require('expect'),
    $ = require('jquery');

let Todo = require('Todo');

describe('Todo', () => {
    it('Should exist', () => {
        expect(Todo).toExist();
    });
});