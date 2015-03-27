modulejs.define('taskList', ['react'], function(React) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log(this.props.taskList);
      return (
        React.createElement("span", null, "lalala")
        )
    }
  })

  return TaskList

})
