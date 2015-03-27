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
      this.props.onCommentSubmit(formData, this.props.form.action);
      this.refs.name.getDOMNode().value = "";
    },

    render: function() { return (
          React.createElement("form", {ref: "form", className: "comment-form", action:  this.props.form.action, "accept-charset": "UTF-8", method: "post", onSubmit:  this.handleSubmit}, 
            React.createElement("p", null, React.createElement("input", {ref: "task-name", name: "task[name]", placeholder: "Task name"})), 
            React.createElement("p", null, React.createElement("button", {type: "submit"}, "Post comment"))
          )
        )
    }
  })

  return TaskForm

})
