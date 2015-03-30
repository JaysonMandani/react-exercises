modulejs.define('task', ['react', 'taskForm', 'jquery', 'taskList'], function(React, TaskForm, $, TaskList){ 
	var Task = React.createClass({
    getInitialState: function() {
      return this.props;
    },

    handleTaskSubmit: function(formData, type, id) {
      return $.ajax({
        data: formData,
        url: this.state.form.action + "/" + id,
        type: type,
        dataType: "json",
        success: (function(data) {
          return this.setState({
            tasks: data
          });
        }).bind(this)
      });
    },

		render: function() {
      React.render(<TaskForm form={ this.state.form } onTaskSubmit={ this.handleTaskSubmit }/>, document.getElementById('task-form'));
      return (
          <div className="task-box">
            <TaskList taskListNodes={ this.state.tasks } form={ this.state.form } onTaskSubmit={ this.handleTaskSubmit } />

            <hr />
            <center><h2>Create Task</h2></center>
          </div>
        )
		}
	})

	return Task

})
