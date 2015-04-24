
var deletedIds = [];

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var aQuery=function(){
    //aQuery().xx

    //return new aQuery();死循环

    //
    return new aQuery.prototype.init()
}



aQuery.prototype={
    jquery: "2013",

    constructor: jQuery,

    // Start with an empty selector
    selector: "",

    // The default length of a jQuery object is 0
    length: 0,

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
}


aQuery.prototype.init= function(){
    return this;
},

//aQuery.extend(deep,{},{}),aQuery.extend(obj)
aQuery.extend=aQuery.prototype.extend=function(){

    var target=arguments[0],
        copy,
        i= 1,
        options,
        length=arguments.length,
        deep=false,src;

    if(typeof target=="boolean"){
        deep=target;
        target=arguments[1]||{};
        i=2;
    }

    if(!target){
        return {};
    }

    if(i==length){//extend(obj);
        target=this;
        i--;
    }

    for(;i<length;i++){
        for(var name in arguments[i]){
            options=arguments[i];
            src=target[name];
            copy=options[name];

            if(deep && typeof copy=="object"){
                src=src||{};
                target[name]=aQuery.extend(deep,src,copy);
            }else{
                target[name]=copy;
            }

        }
    }

    return target;

}

aQuery.extend({
    Observable:{
        callbacks: [],

        add: function(fn) {
            this.callbacks.push(fn);
        },

        fire: function() {
            this.callbacks.forEach(function(fn) {
                fn();
            })
        }
    }
})

//改变实例的原型链(关键点)
aQuery.prototype.init.prototype=aQuery.prototype;