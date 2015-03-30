modulejs.define('taskList', ['react', 'taskListPartial'], function(React, TaskListPartial) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log(this.props.taskListNodes);
      var form = this.props.form
      var on_task_submit = this.props.onTaskSubmit
      var taskNodes = this.props.taskListNodes.map(function( task ){
        return React.createElement(TaskListPartial, {name:  task.name, id:  task.id, form:  form, handleTaskSubmit:  on_task_submit })
      })

      return (
        { taskNodes }
      )
    }

  })

  return TaskList

})
