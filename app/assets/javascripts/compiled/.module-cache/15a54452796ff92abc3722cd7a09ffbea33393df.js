modulejs.define('taskList', ['react'], function(React) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log("list", this.props.tasks)
      var tasks = this.props.tasks.map(function ( task ) {
          React.createElement("div", {className: "task-list"}, 
            React.createElement("p", null,  task.name)
          )
      });
      return tasks;
    }
  })

  return TaskList

})
