modulejs.define('taskListPartial', ['react', 'taskForm', 'jquery', 'task'], function(React, TaskForm, $, Task) {

  var TaskListPartial = React.createClass({displayName: "TaskListPartial",
    handleTaskEdit: function(event) {
      React.unmountComponentAtNode(document.getElementById('task-form'));
      React.render(React.createElement(TaskForm, {form: this.props.form, task_id: this.props.id, task_name:  this.props.name, onTaskSubmit:  this.props.handleTaskSubmit}), document.getElementById('task-form'));
    },

    destroyTask: function(event) {
      event.preventDefault();

      return $.ajax({
        url: this.props.form.action + "/" + this.props.id,
        method: 'DELETE',
        dataType: "json",
        success: (function(data) {
          return this.setState({
            tasks: data
          });
        }).bind(this)
      });
      React.unmountComponentAtNode(document.getElementById('task'));
      React.render(React.createElement(Task, null))
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
