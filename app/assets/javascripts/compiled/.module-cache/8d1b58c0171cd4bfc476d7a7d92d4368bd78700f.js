modulejs.define('task', ['react'], function(React){

	var task = React.createClass({displayName: "task",
		render: function() {
			return (
				React.createElement("span", null, " test ")
			)
		}
	})

	return task


})