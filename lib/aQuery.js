var aQuery=function(){
    //aQuery().xx

    //return new aQuery();死循环

    //
    return new aQuery.prototype.init()
}


aQuery.prototype={
    init:function(){
        this.age=18;
        return this;
    },

    name:function(){
        console.log("张三")
        return this;
    },

    age:20
}

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

//改变实例的原型链(关键点)
aQuery.prototype.init.prototype=aQuery.prototype;