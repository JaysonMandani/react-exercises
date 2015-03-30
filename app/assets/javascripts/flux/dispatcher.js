modulejs.define('taskDispatcher', ['flux'], function(Flux) {
  var Dispatcher = Flux.Dispatcher;
  var TaskDispatcher = new Dispatcher();

  return TaskDispatcher;
});
