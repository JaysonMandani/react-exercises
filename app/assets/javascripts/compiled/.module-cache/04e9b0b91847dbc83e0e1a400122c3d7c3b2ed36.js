modulejs.define('taskList', ['react'], function(React) {

  var TaskList = React.createClass({displayName: "TaskList",
    render: function() {
      console.log("list", this.props.taskList)
      return (
        React.createElement("div", {className: "task-list"}, 
          React.createElement("ul", null, 
            
              this.props.taskList.map(function ( task ) {
                return (
                   React.createElement("li", null,  task.name)
                )
              })
            
          )
        )
      )
    }
  })

  return TaskList

})
