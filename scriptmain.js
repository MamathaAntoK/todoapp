



var todos = [];
var completedTodos = 0;




function loadTodoListPage() {

  $.get("https://jsonplaceholder.typicode.com/todos", function(data) {
    todos = data;
    var todoListHTML = '<h2 class="text-center text-white">TODO LIST</h2>';
    todoListHTML += '<ul class="list-group" >';
    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      var checkbox = '<input type="checkbox"  onchange="todoCheckboxChanged(this, ' + i + ')"';
      if (todo.completed) {
        checkbox += ' checked';
      }
      checkbox += '>';
      todoListHTML += '<li class="list-group-item" style="background-color:rgb(0,0,0,0.6);color:white;padding:20px;">' + checkbox + ' ' + todo.title + '</li>';
    }
    todoListHTML += '</ul>';

  
    $("#content").html(todoListHTML);
  });
}

function todoCheckboxChanged(checkbox, index) {
  todos[index].completed = checkbox.checked;
  if (checkbox.checked) {
    completedTodos++;
  } else {
    completedTodos--;
  }

  if (completedTodos === 5) {
    showCongratulations();
  }
}


function showCongratulations() {
  alert("Congrats. 5 Tasks have been Successfully Completed");
}

function logout(){
  window.location.href="index.html"
}