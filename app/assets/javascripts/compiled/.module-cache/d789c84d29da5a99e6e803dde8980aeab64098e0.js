modulejs.define('taskList', ['react', 'taskListPartial', 'taskStore'], function(React, TaskListPartial, TaskStore) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log(this.props.taskListNodes);
      window.wat = TaskStore;
      var form = this.props.form
      var on_task_submit = this.props.onTaskSubmit
      var taskNodes = this.props.taskListNodes.map(function( task ){
        return React.createElement(TaskListPartial, {name:  task.name, id:  task.id, form:  form, handleTaskSubmit:  on_task_submit })
      })

      return (
        React.createElement("div", {className: "task-list"}, 
           taskNodes 
        )
      )
    }

  })

  return TaskList

})
