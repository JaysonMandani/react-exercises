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
      if (!this.props.task_id) {
        this.props.onTaskSubmit(formData, "POST", "");
      } else {
        this.props.onTaskSubmit(formData, "PATCH", this.props.task_id);
      }
      return this.refs.name.getDOMNode().value = ""
    },

    render: function() {
      return (
        React.createElement("form", {ref: "form", className: "task-form", "accept-charset": "UTF-8", onSubmit:  this.handleSubmit}, 
          React.createElement("p", null, React.createElement("input", {type: "hidden", name:  this.props.form.csrf_param, value:  this.props.form.csrf_token})), 
          React.createElement("p", null, React.createElement("input", {ref: "name", name: "task[name]", placeholder: "Task name", defaultValue:  this.props.task_name})), 
          React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post task"))
        )
      )
    }
  })

  return TaskForm

})
