modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({displayName: "TaskForm",
    render: function() { 
      return (
          React.createElement("form", null, 
            React.createElement("p", null, React.createElement("input", {ref: "task-name", name: "task[name]", placeholder: "Task name"})), 
            React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post task"))
          )
        )
    }
  })

  return TaskForm

})
