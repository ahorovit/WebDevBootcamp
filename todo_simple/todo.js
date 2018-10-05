


var todos = [];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
  var input = prompt("What would you like to do?");

  while (input != 'quit')
  {
  	if (input == 'new')
  	{
  		var newTask = prompt("What is the new task?");
  		todos.push(newTask);
      console.log(newTask + ' added to the list.');
  	} 
  	else if (input == 'list')
  	{
      console.log('**********');
      todos.forEach(function(element, index)
      {
        console.log(index + ': ' + element);
      })
      console.log('**********');
  	}
    else if (input == 'delete')
    {
      var target = prompt("Which index do you want to remove?");
      todos.splice(target,1);
    }
  	else {
      input = prompt("Invalid input. What would you like to do?");
  		continue;
  	}

  	input = prompt("What would you like to do?");
  }


}, 500);