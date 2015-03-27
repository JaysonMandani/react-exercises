modulejs.define('taskList', ['react', 'taskListPartial'], function(React, TaskListPartial) {

  var TaskList = React.createClass({
    render: function() {
      console.log(this.props.taskListNodes);
      var taskNodes = this.props.taskListNodes.map(function( task ){
        return <TaskListPartial name={ task.name }/>
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
