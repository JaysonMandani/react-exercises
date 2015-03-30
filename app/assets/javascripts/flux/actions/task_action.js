modulejs.define('taskAction', ['restful', 'taskConstant'], function(Restful, TaskConstant) {
  return {
    create: function(params) {
      rest = new Restful('/tasks', params, TaskConstant.CREATE)
      rest.post();
    }
    update: function(id, params) { 
     rest = new Restful('/tasks/' + id, params, TaskConstant.UPDATE)
     rest.patch();
    }
  }
});
