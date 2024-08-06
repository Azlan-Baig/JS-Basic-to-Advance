var accesible = (function abcd(){
    var PriveVar = 15;
    return {
        getter:function(){
            console.log(PriveVar)
        },
        setter:function(val){
        PriveVar = val;
        }
    }
})();