###Extending backbone to add repeating fetch functionality

How to use:
```javascript
var Model = Backbone.Model.extend();
var model = new Model;

//start fetching on a repeating interval
//pass in options as a second argument
model.setFetchInterval(5000);

//to stop future fetches
model.clearFetchInterval();
```
