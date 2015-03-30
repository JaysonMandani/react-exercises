modulejs.define('taskStore', ['underscore', 'eventEmitter', 'jquery', 'taskDispatcher', 'taskConstant'], function(_, EventEmitter, $, TaskDispatcher, TaskConstant) {
  var tasks = Immutable.OrderedMap();

  function create(params) {
    tasks = tasks.set(params.id, Immutable.fromJS(params))
  }

  var TaskStore = {
    all: function() {
      if (tasks.size == 0) {
        _.each($.parseJSON($('#tasks-index').html()))
      }

      return tasks;
    },

    addThisListener: function(eventName, callback) { this.on(eventName, callback) },
    removeThisListener: function(eventName, callback) { this.removeThisListener(eventName, callback) },

    emit: function(eventName) { this.emit(eventName) },
  }

  _.extend(TaskStore, EventEmitter.prototype);

  TaskDispatcher.register(function(payload) {
    switch (payload.key) {
    case TaskConstant.CREATE:
      create(payload.values);
      TaskStore.emit(TaskConstant.CREATE);
      break;

    case TaskConstant.UPDATE:
      update(payload.values);
      TaskStore.emit(TaskConstant.UPDATE);
      break;
    }
  });

  return TaskStore;
});
