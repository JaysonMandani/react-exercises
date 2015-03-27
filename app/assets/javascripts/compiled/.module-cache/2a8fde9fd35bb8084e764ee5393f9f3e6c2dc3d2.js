modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({displayName: "TaskForm",
    handleSubmit: function(event) {
      var name, formData;
      event.preventDefault()
      name = this.refs.name.getDOMNode().value.trim();
      if (!name) {
        return false
      }
      formData = $(this.refs.form.getDOMNode()).serialize()
      this.props.onTaskSubmit(formData, this.props.form.action);
      this.refs.name.getDOMNode().value = "";
    },

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
