modulejs.define('taskList', ['react', 'taskForm', 'jquery'], function(React, TaskForm, $){

  var TaskList = React.createClass({displayName: "TaskList",
    getInitialState: function() {
      return this.props.taskList;
    },

    render: function() {
      console.log(this.state.taskList);
    }
  });

  return TaskList;

})
