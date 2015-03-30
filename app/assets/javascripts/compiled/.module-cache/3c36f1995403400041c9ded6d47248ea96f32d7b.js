modulejs.define('taskListPartial', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      React.unmountComponentAtNode(document.getElementById('task-form'));
      React.render(React.createElement(TaskForm, {form: this.props.form, task_id: this.props.id, task_name:  this.props.name, onTaskSubmit:  this.props.handleTaskSubmit}), document.getElementById('task-form'));
    },

    destroyTask: function(event) {
      event.preventDefault();

      $.ajax({
        url: this.props.form.action + "/" + this.props.id,
        method: 'DELETE',
        dataType: "json",
        success: function(data) {
          $("[data-id=" + this.props.id + "]").hide()
        }
      });
    },

    render: function() {
      return (
        React.createElement("div", null, 
          React.createElement("p", {"data-id":  this.props.id, onClick:  this.handleTaskEdit},  this.props.name), 
          React.createElement("span", {"data-id":  this.props.id, onClick:  this.destroyTask}, "DELETE")
        )
      )
    }
  })

  return TaskListPartial

})
