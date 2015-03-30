modulejs.define('taskList', ['react', 'taskListPartial', 'taskStore', 'taskConstant'], function(React, TaskListPartial, TaskStore, TaskConstant) {

  var TaskList = React.createClass({
    getInitialState: function() {
      return {
        tasks: TaskStore.all(),
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

        return <TaskListPartial name={ task._root.entries[1][1] } id={ task.id } form={ form } handleTaskSubmit={ on_task_submit }/>
      })

      return (
        <div className="task-list">
          { taskNodes }
        </div>
      )
    }

  })

  return TaskList

})
