modulejs.define('taskListPartial', ['react', 'taskForm'], function(React, TaskForm) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      console.log("hahaha");
      React.unmountComponentAtNode(document.getElementById('task-form'));
      React.render(React.createElement(TaskForm, {form: this.props.form, task_id: this.props.id, task_name:  this.props.name}), document.getElementById('task-form'));
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
