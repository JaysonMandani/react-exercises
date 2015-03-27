modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({displayName: "TaskForm",
    handleSubmit: function(event){
      event.preventDefault();
      console.log(event);
      window.wat = this.refs;
      formData = $(this.refs.form.getDOMNode()).serialize();
      this.props.onTaskSubmit(formData, this.refs.form.props.action);
      console.log(this.refs);
    },
    render: function() { 
      return (
          React.createElement("form", {ref: "form", className: "task-form", action: "/tasks", method: "post", onSubmit:  this.handleSubmit}, 
            React.createElement("p", null, React.createElement("input", {ref: "task-name", name: "task[name]", placeholder: "Task name"})), 
            React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post task"))
          )
        )
    }
  })

  return TaskForm

})
