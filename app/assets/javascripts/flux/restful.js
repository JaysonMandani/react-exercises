modulejs.define('restful', ['jquery', 'TaskDispatcher'], function($, TaskDispatcher) {
  var TIMEOUT = 1000;
  var GET = 'get'
  var POST = 'post'
  var PATCH = 'patch'

  function dispatch(key, values) {
    TaskDispatcher.dispatch({ key: key, values: values });
  }

  function success(key, data) {
    return dispatch(key, data);
  }

  function error(key, jqXHR, textStatus, errorThrown) {}

  function complete(key, jqHXR, textStatus) {}

  function ajaxCall(requestType, url, params, key) {
    return(
      $.ajax({
        type: requestType,
        url: url,
        data: params,
        dataType: 'JSON',
        timeout: TIMEOUT,
        success: function(data) {
          success(key, data)
        }, error: function(jqXHR, textStatus, errorThrown) {
          error(key, jqXHR, textStatus, errorThrown)
        }, complete: function(jqXHR, textStatus) {
          complete(key, jqXHR, textStatus)
        }
      })
    )
  }

  var Restful = function(url, params, key) {
    this.get = function() { ajaxCall(GET, url, params, key); }
    this.post = function() { ajaxCall(POST, url, params, key); }
    this.patch = function() { ajaxCall(PATCH, url, params, key); }
  }

  return Restful;
});
