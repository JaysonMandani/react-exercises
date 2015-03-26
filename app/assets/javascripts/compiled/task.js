modulejs.define('task', ['react'], function(React){

	var Task = React.createClass({displayName: "Task",
		render: function() {
      React.createElement("span", null, "Test")
		}
	})

	return Task

})
