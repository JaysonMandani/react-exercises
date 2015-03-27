modulejs.define('taskList', ['react', 'jquery'], function(React, $){

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
