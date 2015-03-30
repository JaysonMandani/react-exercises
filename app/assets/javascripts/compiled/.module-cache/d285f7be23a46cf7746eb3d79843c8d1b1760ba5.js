modulejs.define('taskListPartial', ['react', 'taskForm'], function(React, TaskForm) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      // console.log(document.getElementByClassName("task-form"));
      React.unmountComponentAtNode(document.getElementsByClassName("task-form"));
      // React.render (
      //   <TaskForm task_name={ this.props.name } task_id={ this.props.id } />
      // )
    },

    render: function() {
      return (
        React.createElement("p", {"data-id":  this.props.id, onClick: this.handleTaskEdit},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
