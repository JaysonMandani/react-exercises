modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    render: function() {
      return (
        React.createElement("p", {"data-id":  this.props.id},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
