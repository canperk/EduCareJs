var EC = EC || {};
EC.Models = {};
(function () {
    EC.Enums = EC.Enums || {};
    EC.Enums.DateType = {
        NotSet: 0,
        Second: 1,
        Minute: 2,
        Hour: 3,
        Day: 4
    };

    EC.Serialize = function (obj) {
        return JSON.stringify(obj);
    }

    EC.Deserialize = function (str, type) {
        var obj = JSON.parse(str);
        for (var p in obj)
            if ({}.hasOwnProperty.call(obj, p))
                obj[p] = { value: obj[p] };

        return Object.create(type.prototype, obj);
    }
})();
var EC = EC || {};
(function () {
    EC.Ajax = EC.Ajax || {};
    EC.Ajax.Get = function (url, callBack) {
        $.ajax({
            "url": url,
            "type": "GET",
            "contentType": "application/json"
        }).success(function (data) {
            callBack(data);
        }).err(errorCallBack);
    }

    EC.Ajax.Post = function (url, data, callBack) {
        var d = JSON.stringify(data);
        $.ajax({
            "url": url,
            "type": "POST",
            "contentType": "application/json",
            "data": d
        }).success(function (data) {
            callBack(data);
        }).error(errorCallBack);
    }

    function errorCallBack() {
        let message = "Something went wrong!";
        if (EC.Notify)
            EC.Notify.Error(message);
        else
            alert(message);
    }
})();
var EC = EC || {};
(function () {
    EC.Cookies = EC.Cookies || {};
    EC.Cookies.Set = function (name, value, expire, type) {
        var date = new Date();
        var day = 1, hour = 1, minute = 1, second = 1;

        if (type === 1) { //second
            second = expire * 1000;
            date.setTime(date.getTime() + (day * hour * minute * second));
            var expires = "; expires=" + date.toGMTString();
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        else if (type === 2) { //minute
            minute = expire * 60;
            second = 1000;
            date.setTime(date.getTime() + (day * hour * minute * second));
            var expires = "; expires=" + date.toGMTString();
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        else if (type === 3) { //hour
            hour = expire * 24;
            minute = 60;
            second = 1000;
            date.setTime(date.getTime() + (day * hour * minute * second));
            var expires = "; expires=" + date.toGMTString();
            document.cookie = name + "=" + value + expires + "; path=/";
        }
        else if (type === 4) { //day
            day = expire * day;
            hour = 24;
            minute = 60;
            second = 1000;
            date.setTime(date.getTime() + (day * hour * minute * second));
            var expires = "; expires=" + date.toGMTString();
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    }
    EC.Cookies.Get = function (name) {
        var n = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(n) == 0) return c.substring(n.length, c.length);
        }
        return null;
    }
})();
var EC = EC || {};
(function () {
    EC.Exception = EC.Exception || {};
    EC.Exception.HandleException = function () {
        window.onerror = function (msg, url, line, col, error) {
            if (EC.Notify) {
                EC.Notify.Error("[Exception] : " + msg);
            }
            else {
                var extra = !col ? '' : '\ncolumn: ' + col;
                extra += !error ? '' : '\nerror: ' + error;
                alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
            }
            return true;
        };
    }

    EC.Exception.HandleException();
})();
var EC = EC || {};
(function () {
    $.fn.changeIcon = function (icon) {
        var self = $(this);
        if (self.is("button")) {
            self.find("span.fa").remove();
            var text = self.text().trim();
            var span = '<span class="fa fa-'+ icon +'"></span> ';
            self.html(span + text);
        }
        else
            throw "changeIcon method can be used only with buttons";
    }

    $.fn.removeIcon = function () {
        var self = $(this);
        if (self.is("button")) {
            self.find("span.fa").remove();
            var text = self.text().trim();
            self.html(text);
        }
        else
            throw "removeIcon method can be used only with buttons";
    }

    $.fn.changeType = function (type) {
        var self = $(this);
        if (self.is("button")) {
            self.removeClass("btn-danger");
            self.removeClass("btn-info");
            self.removeClass("btn-default");
            self.removeClass("btn-success");
            self.removeClass("btn-primary");
            self.removeClass("btn-warning");

            self.addClass("btn-"+type);
        }
        else
            throw "changeType method can be used only with buttons";
    }
})();
var EC = EC || {};
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
var EC = EC || {};
(function () {
    EC.Notify = EC.Notify || {};
    EC.Notify.Info = function (content) {
        notify(content, "info", "Information");
    }
    EC.Notify.Success = function (content) {
        notify(content, "success", "Success");
    }
    EC.Notify.Warning = function (content) {
        notify(content, "warning", "Warning");
    }
    EC.Notify.Error = function (content) {
        notify(content, "danger", "Error");
    }

    function notify(c, t, ti) {
        $.notify({
            title : ti,
            message: c
        }, {
            type: t,
            newest_on_top: true,
            delay:5000
        });
    }
})();