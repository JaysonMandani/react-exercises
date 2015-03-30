modulejs.define('taskList', ['react', 'taskListPartial', 'taskStore'], function(React, TaskListPartial, TaskStore) {

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function() {
      return {
        tasks: TaskStore.all()
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
      var form = this.props.form
      var on_task_submit = this.props.onTaskSubmit
      var taskNodes = this.props.taskListNodes.map(function( task ){
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
