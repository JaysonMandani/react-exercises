modulejs.define('task', ['react', 'taskForm', 'jquery', 'taskList'], function(React, TaskForm, $, TaskList){ 
	var Task = React.createClass({displayName: "Task",
    getInitialState: function() {
      return this.props;
    },

    handleTaskSubmit: function(formData, action) {
      return $.ajax({
        data: formData,
        url: action,
        type: "POST",
        dataType: "json",
        success: (function(data) {
          return this.setState({
            tasks: data
          });
        }).bind(this)
      });
    },

		render: function() {
      React.render(React.createElement(TaskForm, null), document.getElementById('task-form'));
      return (
          React.createElement("div", {className: "task-box"}, 
            React.createElement(TaskList, {taskListNodes:  this.state.tasks}), 

            React.createElement("hr", null), 
            React.createElement("h2", null, "Create Task")
          )
        )
		}
	})

	return Task

})
