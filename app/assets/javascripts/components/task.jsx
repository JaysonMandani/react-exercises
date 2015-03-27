modulejs.define('task', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $){

	var Task = React.createClass({
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
      console.log(this.props);
      return (
          <div className="comment-box">
            <hr />
            <h2>Create Task</h2>
            <TaskForm onTaskSubmit={this.handleTaskSubmit}/>
          </div>
        )
		}
	})

	return Task

})
