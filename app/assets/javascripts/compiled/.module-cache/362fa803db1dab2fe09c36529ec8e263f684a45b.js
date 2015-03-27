modulejs.define('taskList', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $){

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function() {
      return this.props.tasks;
    },

    render: function() {
      console.log(this.state.tasks);
    }
  })

  return TaskList

})
