modulejs.define('taskList', ['react', 'taskListPartial'], function(React, TaskListPartial) {

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function () {
      return this.props.taskList;
    },
    render: function() {
      var taskNodes = this.props.taskList.map(function( task ){
        return React.createElement(TaskListPartial, {name:  task.name})
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
