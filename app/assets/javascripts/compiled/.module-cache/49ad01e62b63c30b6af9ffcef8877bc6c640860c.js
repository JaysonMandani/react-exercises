modulejs.define('taskList', ['react', 'taskListPartial'], function(React, TaskListPartial) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log(this.props.taskListNodes);
      var taskNodes = this.props.taskListNodes.map(function( task ){
        return React.createElement(TaskListPartial, {name:  task.name, id:  task.id})
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
