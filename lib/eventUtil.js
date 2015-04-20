/**
 * Created by jade on 2015/4/20.
 */

var EventUtil={
    addHandler:function(obj,type,handler){
        if(obj.addEventListener){
            obj.addEventListener(type,handler,false);
        }else if(obj.attachEvent){
            obj.attachEvent('on'+type,handler);
        }else{
            obj['on'+type]=handler;
        }
    },
    removeHandler:function(obj,type,handler){
        if(obj.removeEventListener){
            obj.removeEventListener(type,handler,false);
        }else if(obj.detachEvent){
            obj.detachEvent('on'+type,handler);
        }else{
            obj["on"+type]=null;
        }
    },

    getEvent:function(event){
        return event||window.event;
    },

    getTarget:function(event){
        var event=this.getEvent(event);
        return event.target||event.srcElement;
    },

    preventDefault:function(event){
        var event=this.getEvent(event);
        if(event.preventDefault){
            event.preventDefault();
        }else{
            event.returnValue=false;
        }
    },

    stopPropagation:function(event){
        var event=this.getEvent(event);
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
    }
}