modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({
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
        <center>
          <form ref="form" className="task-form" onSubmit={ this.handleSubmit }>
            <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
            <p><input ref="name" name="task[name]" placeholder="Task name" defaultValue={ this.props.task_name } /></p>
            <p><button type="submit">Post task</button></p>
          </form>
        </center>
      )
    }
  })

  return TaskForm

})
