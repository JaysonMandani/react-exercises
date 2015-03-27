modulejs.define('task', ['react', 'taskForm'], function(React, TaskForm){

	var Task = React.createClass({displayName: "Task",

		render: function() {
      return (
          React.createElement("div", {className: "comment-box"}, 
            React.createElement("hr", null), 
            React.createElement("h2", null, "Create Task"), 
            React.createElement(TaskForm, null)
          )
        )
		}
	})

	return Task

})
