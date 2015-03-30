modulejs.define('taskListPartial', ['react', 'taskForm'], function(React, TaskForm) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      React.unmountComponentAtNode(document.getElementById("tasks"))
      React.render (
        React.createElement(TaskForm, {task_name:  this.props.name, task_id:  this.props.id})
      )
    },

    render: function() {
      return (
        React.createElement("p", {"data-id":  this.props.id, onClick: this.handleTaskEdit},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
