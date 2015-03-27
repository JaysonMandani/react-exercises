modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({displayName: "TaskForm",
    handleSubmit: function(event){
      var formData, text;
      event.preventDefault();
      name = this.refs.name.getDOMNode().value.trim();
      if (!name) {
        return false;
      }
      formData = $(this.refs.form.getDOMNode()).serialize();
      this.props.onTaskSubmit(formData, this.props.form.action);
      return this.refs.name.getDOMNode().value = ""
    },

    render: function() {
      console.log("FORM",this.props.form);
      return (
          React.createElement("form", {ref: "form", className: "task-form", action:  this.props.form.action, "accept-charset": "UTF-8", method: "post", onSubmit:  this.handleSubmit}, 
            React.createElement("p", null, React.createElement("input", {type: "hidden", name:  this.props.form.csrf_param, value:  this.props.form.csrf_token})), 
            React.createElement("p", null, React.createElement("input", {ref: "task-name", name: "task[name]", placeholder: "Task name"})), 
            React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post task"))
          )
        )
    }
  })

  return TaskForm

})
