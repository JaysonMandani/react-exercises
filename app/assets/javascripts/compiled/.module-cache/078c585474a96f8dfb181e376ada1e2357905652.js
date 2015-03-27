modulejs.define('task', ['react'], function(React){

	var Task = React.createClass({displayName: "Task",

		render: function() {
      return (
          React.createElement("div", {className: "comment-box"}, 
            "// ", React.createElement(CommentList, {comments:  this.state.tasks}), 
            React.createElement("hr", null), 
            React.createElement("h2", null, "Add a comment:"), 
            "// ", React.createElement(CommentForm, {form:  this.state.form, onCommentSubmit:  this.handleCommentSubmit})
          )
        )
		}
	})

})
