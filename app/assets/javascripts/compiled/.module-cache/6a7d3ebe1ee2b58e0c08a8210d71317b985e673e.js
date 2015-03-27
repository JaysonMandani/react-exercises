modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({displayName: "TaskForm",
    handleSubmit: function(event){
      event.preventDefault();
      console.log(event);
    },
    render: function() { 
      return (
          React.createElement("form", {ref: "form", className: "task-form", method: "post", onSubmit:  this.handleSubmit}, 
            React.createElement("p", null, React.createElement("input", {ref: "task-name", name: "task[name]", placeholder: "Task name"})), 
            React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post task"))
          )
        )
    }
  })

  return TaskForm

})
