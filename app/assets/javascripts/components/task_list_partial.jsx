modulejs.define('taskListPartial', ['react'], function(React) {

  var TaskListPartial = React.createClass({
    render: function() {
      return (
        <p>{ this.props.name }</p>
      )
    }
  })

  return TaskListPartial

})
