modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    render: function() {
      return (
        React.createElement("p", null,  this.props.name)
      )
    }
  })
})
