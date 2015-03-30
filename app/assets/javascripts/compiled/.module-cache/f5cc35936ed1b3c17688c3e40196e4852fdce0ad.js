modulejs.define('taskListPartial', ['react', 'taskForm'], function(React, TaskForm) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      console.log("hahaha");
      console.log(this.props)
      React.unmountComponentAtNodes(document.getElementById('task-form'));
      // React.render(<TaskForm form={this.props.form} task_id={this.props.id}/>, document.getElementById('task-form'));
      console.log("lalalal");
    },

    render: function() {
      return (
        React.createElement("p", {"data-id":  this.props.id, onClick: this.handleTaskEdit},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
