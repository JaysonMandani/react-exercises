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
      return (
          React.createElement("div", {className: "task-box"}, 
            React.createElement(TaskList, {taskListNodes:  this.state.tasks}), 

            React.createElement("hr", null), 
            React.createElement("h2", null, "Create Task"), 

            React.createElement(TaskForm, {form: this.state.form, onTaskSubmit: this.handleTaskSubmit})
          )
        )
		}
	})

	return Task

})
