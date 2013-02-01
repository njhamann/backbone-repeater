Extending backbone to add repeating fetch functionality
How to use:
var Model = Backbone.Model.extend();
var model = new Model;
model.setFetchInterval(5000);
model.clearFetchInterval();
