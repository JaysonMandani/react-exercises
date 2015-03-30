modulejs.define('taskList', ['react', 'taskListPartial', 'taskStore', 'taskConstant'], function(React, TaskListPartial, TaskStore, TaskConstant) {

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function() {
      return {
        tasks: TaskStore.all(),
        form: TaskStore.form()
      }
    },

    componentDidMount: function() {
      var that = this;
      TaskStore.addThisListener(TaskConstant.CREATE, function() {
        that.setState({ tasks: TaskStore.all() });
      });
    },

    componentWillUnmount: function() {
      TaskStore.removeThisListener(TaskConstant.CREATE);
    },

    render: function() {
      console.log(this.state.tasks)
      var form = this.props.form
      var on_task_submit = this.props.onTaskSubmit
      var taskNodes = this.state.tasks.map(function( task ){
        return React.createElement(TaskListPartial, {name:  task.name, id:  task.id, form:  form, handleTaskSubmit:  on_task_submit })
      })

      return (
        React.createElement("div", {className: "task-list"}, 
           taskNodes 
        )
      )
    }

  })

  return TaskList

})
