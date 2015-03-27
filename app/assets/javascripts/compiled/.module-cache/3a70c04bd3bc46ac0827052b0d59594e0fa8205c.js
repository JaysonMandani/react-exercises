modulejs.define('taskList', ['react'], function(React) {

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function() {
      return this.props.taskList;
    },
    render: function() {
      return (
        React.createElement("span", null, "lalala")
        )
    }
  })

  return TaskList

})
