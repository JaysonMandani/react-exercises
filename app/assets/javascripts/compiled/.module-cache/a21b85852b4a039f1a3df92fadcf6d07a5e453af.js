modulejs.define('taskList', ['react'], function(React) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log("list", this.props.taskList)
      var tasks = this.props.taskList.map(function ( task ) {
        console.log(task.name);
      });

      return tasks;
    }
  })

  return TaskList

})
