/**
 * Extending backbone to allow fetch intervals
 * var Model = Backbone.Model.extend();
 * var model = new Model;
 * model.setFetchInterval(5000);
 * model.clearFetchInterval();
 */

//Model
Backbone.Model.prototype.fetchInterval = null;

Backbone.Model.prototype.setFetchInterval = function(seconds, options){
    if(!seconds){
        return false;
    }
    var _this = this;
    var interval = setInterval(function(){    
        _this.fetch(options); 
    }, seconds);
    _this.fetch(options); 
    _this.fetchInterval = interval;
};

Backbone.Model.prototype.clearFetchInterval = function(){
    var interval = this.fetchInterval;
    if(!interval){
        return false;
    }
    clearInterval(interval);
};

//Collection
Backbone.Collection.prototype.interval = null;

Backbone.Collection.prototype.setFetchInterval = function(seconds, options){
    if(!seconds){
        return false;
    }
    var _this = this;
    var interval = setInterval(function(){    
        _this.fetch(options); 
    }, seconds);
    this.fetch(options); 
    this.fetchInterval = interval;
};

Backbone.Collection.prototype.clearFetchInterval = function(){
    console.log('kill intervla');
    var interval = this.fetchInterval;
    if(!interval){
        return false;
    }
    clearInterval(interval);
};
