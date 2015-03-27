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
      this.props.onTaskSubmit(formData, this.props.form.action);
      return this.refs.name.getDOMNode().value = ""
    },

    render: function() {
      return (
        <form ref="form" className="task-form" action={ this.props.form.action } accept-charset="UTF-8" method="post" onSubmit={ this.handleSubmit }>
          <p><input type="hidden" name={ this.props.form.csrf_param } value={ this.props.form.csrf_token } /></p>
          <p><input ref="name" name="task[name]" placeholder="Task name" /></p>
          <p><button type="submit">Post task</button></p>
        </form>
      )
    }
  })

  return TaskForm

})
