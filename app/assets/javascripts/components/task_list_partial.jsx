modulejs.define('taskListPartial', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $) {

  var TaskListPartial = React.createClass({
    handleTaskEdit: function(event) {
      React.unmountComponentAtNode(document.getElementById('task-form'));
      React.render(<TaskForm form={this.props.form} task_id={this.props.id} task_name={ this.props.name } onTaskSubmit={ this.props.handleTaskSubmit }/>, document.getElementById('task-form'));
    },

    destroyTask: function(event) {
      event.preventDefault();

      $.ajax({
        url: this.props.form.action + "/" + this.props.id,
        method: 'DELETE',
        dataType: "json",
      });
      $("[data-id=" + this.props.id + "]").hide()
    },

    render: function() {
      return (
        <div>
          <p data-id={ this.props.id } onClick={ this.handleTaskEdit }>{ this.props.name }</p>
          <span data-id={ this.props.id } onClick={ this.destroyTask }>DELETE</span>
        </div>
      )
    }
  })

  return TaskListPartial

})
