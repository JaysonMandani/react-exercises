modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    render: function() {
      console.log(this.props.id)
      return (
        React.createElement("p", {id:  this.props.key},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
