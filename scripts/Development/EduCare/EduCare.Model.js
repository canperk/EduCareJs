var EC = EC || {};
EC.Models = EC.Models || {};
(function(){
    EC.BaseViewModel = {
        canInsert : ko.observable(false),
        canDelete : ko.observable(false),
        canUpdate : ko.observable(false)
    };
    EC.init = function(model, element){
        for (var key in parent)
            if (parent.hasOwnProperty(key)) model[key] = parent[key];

        function ctor() {
            this.constructor = model
        }
        ctor.prototype = parent.prototype;
        model.prototype = new ctor;
        model.super = parent.prototype;
        
        var vm = new model();
        model.super.constructor.call(vm);
        ko.applyBindings(vm, document.getElementById(element));
    }   
})();