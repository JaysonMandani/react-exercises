modulejs.define('task', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $){

	var Task = React.createClass({displayName: "Task",
    // getInitialState: function() {
    //   return JSON.parse(this.props.task);
    // },
    //
    // handleTaskSubmit: function(formData, action) {
    //   return $.ajax({
    //     data: formData,
    //     url: action,
    //     type: "POST",
    //     dataType: "json",
    //     success: (function(data) {
    //       return this.setState({
    //         tasks: data
    //       });
    //     }).bind(this)
    //   });
    // },

		render: function() {
      return (
          React.createElement("div", {className: "comment-box"}, 
            React.createElement("hr", null), 
            React.createElement("h2", null, "Create Task"), 
            React.createElement(TaskForm, null), 
            React.createElement("h1", null, this.props)
          )
        )
		}
	})

	return Task

})
