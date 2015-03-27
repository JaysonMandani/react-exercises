modulejs.define('task', ['react', 'taskForm'], function(React, TaskForm){

	var Task = React.createClass({displayName: "Task",
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
          React.createElement("div", {className: "comment-box"}, 
            React.createElement("hr", null), 
            React.createElement("h2", null, "Create Task"), 
            React.createElement(TaskForm, {form:  this.state.form, onTaskSubmit:  this.handleTaskSubmit}), 
            React.createElement("h1", null, this.props)
          )
        )
		}
	})

	return Task

})
