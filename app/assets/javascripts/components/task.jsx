modulejs.define('task', ['react', 'taskForm', 'jquery', 'taskList'], function(React, TaskForm, $, TaskList){ 
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
      return (
          <div className="comment-box">
            <TaskList taskListNodes={ this.state.tasks } />

            <hr />
            <h2>Create Task</h2>
            <TaskForm form={this.state.form} onTaskSubmit={this.handleTaskSubmit}/>
          </div>
        )
		}
	})

	return Task

})
