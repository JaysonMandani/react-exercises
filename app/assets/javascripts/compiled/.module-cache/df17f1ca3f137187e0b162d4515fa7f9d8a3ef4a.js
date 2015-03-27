modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    render: function() {
      console.log("partial", this.props.name)
      return (
        React.createElement("span", null, "lalala")
      )
    }
  })

  return TaskListPartial

})
