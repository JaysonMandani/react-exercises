modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTask: function(event) {
      console.log(event)
    },

    render: function() {
      return (
        React.createElement("p", {"data-id":  this.props.id, onClick: this.handleTask},  this.props.name)
      )
    }
  })

  return TaskListPartial

})
