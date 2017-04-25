let $ = require('jquery');

module.exports = {
  setTodos: function (todos) {
      if($.isArray(todos)) {
          localStorage.setItem('todos', JSON.stringify(todos));
      }
  },
  getTodos: function () {
      let stringTodos = localStorage.getItem('todos'),
          todos = [];

      try {
          todos = JSON.parse(stringTodos);
      } catch (e) {

      }

      return $.isArray(todos) ? todos : [];
  },
  filterTodos: function (todos, showCompleted, searchText) {
      let filteredTodos = todos;

      filteredTodos = filteredTodos.filter((todo) => {
          return !todo.completed || showCompleted;
      });

      return filteredTodos;
  }  
};