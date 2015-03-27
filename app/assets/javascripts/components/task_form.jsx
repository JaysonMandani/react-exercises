modulejs.define('taskForm', ['react'], function(React){

  var TaskForm = React.createClass({
    handleSubmit: function(event){
      event.preventDefault();
      console.log(event);
      window.wat = this.refs;
      formData = $(this.getDOMNode()).serialize();
      this.props.onTaskSubmit(formData, this.refs.form.props.action);
    },
    render: function() {
      return (
          <form ref="form" className="task-form" action="/tasks" method="post" onSubmit={ this.handleSubmit }>
            <p><input ref="task-name" name="task[name]" placeholder="Task name" /></p>
            <p><button type="submit">Post task</button></p>
          </form>
        )
    }
  })

  return TaskForm

})
