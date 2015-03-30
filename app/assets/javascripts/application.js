// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require libs/modulejs.min
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

modulejs.define('react', React);
modulejs.define('immutable', Immutable);
modulejs.define('flux', Flux);
modulejs.define('jquery', function() { return jQuery; });
modulejs.define('underscore', function() { return _; });
modulejs.define('eventEmitter', function() { return EventEmitter; });

$(function() {
  var React = modulejs.require('react');
  var Task = modulejs.require('task');
  var view = React.createFactory(Task);
  var parse_data = $.parseJSON($('#tasks-index').html());
  React.render(view(parse_data[0]), $('#tasks')[0]);
})
