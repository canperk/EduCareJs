var EC = EC || {};
(function (jq, ec) {
    ec.Utils = ec.Utils || {};
    ec.Utils.Serialize = function (obj) {
        return JSON.stringify(obj);
    }

    ec.Utils.Deserialize = function (str, type) {
        var obj = JSON.parse(str);
        for (var p in obj)
            if ({}.hasOwnProperty.call(obj, p))
                obj[p] = { value: obj[p] };

        return Object.create(type.prototype, obj);
    }

    ec.Utils.NewGuid = function () {
        var _func = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        var guid = (_func() + _func() + "-" + _func() + "-4" + _func().substr(0, 3) + "-" + _func() + "-" + _func() + _func() + _func()).toLowerCase();
        return guid;
    }

    ec.Utils.Format = function (text) {
        var str = this;
        var args = arguments;
        var regex = new RegExp("{-?[0-9]+}", "g");
        return text.replace(regex, function (item) {
            var intVal = parseInt(item.substring(1, item.length - 1));
            var replace;
            if (intVal >= 0)
                replace = args[intVal + 1];
            else if (intVal === -1)
                replace = "{";
            else if (intVal === -2)
                replace = "}";
            else
                replace = "";
            return replace;
        });
    };


    ec.Utils.IsNullOrEmpty = function (text) {
        var r = !text || !/[^\s]+/.test(text);
        return r;
    }
    ec.Utils.InitLoader = function () {
        var lc = jq("body .loadingContainer");
        if (lc.length > 0)
            return;
        var loaderHtml = '<div class="loaderContainerMain"><div class="loadingContainer"><div class="cord leftMove"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord rightMove"><div class="ball" id="first"></div></div><div class="shadows"><div class="leftShadow"></div><div></div><div></div><div></div><div></div><div></div><div class="rightShadow"></div></div></div></div>';
        $("body").append(loaderHtml);
    }

    ec.Utils.ShowLoader = function () {
        var lc = jq("body .loaderContainerMain");
        if (lc.length == 0)
            ec.Utils.InitLoader();
        lc.show();
    }

    ec.Utils.HideLoader = function () {
        var lc = jq("body .loaderContainerMain");
        if (lc.length == 0)
            ec.Utils.InitLoader();
        lc.hide();
    }

})($, EC);
(function (ec) {
    ec.Ajax = ec.Ajax || {};
    ec.Ajax.Get = function (url, callBack) {
        $.ajax({
            "url": url,
            "type": "GET",
            "contentType": "application/json"
        }).success(function (data) {
            callBack(data);
        }).err(errorCallBack);
    }

    ec.Ajax.Post = function (url, data, callBack) {
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
        var message = "Something went wrong!";
        if (ec.Notify)
            ec.Notify.Error(message);
        else
            alert(message);
    }
})(EC);
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

    $.fn.blink = function (interval) {
        var self = $(this);
        var t = interval || 300;
        setInterval(function(){
            self.css('visibility', function(i, visibility) {
                return (visibility == 'visible') ? 'hidden' : 'visible';
            });            
        }, t);
    }
})();
$(document).ready(function(){
    $(".blink").blink();
    EC.Utils.InitLoader();
    EC.Utils.ShowLoader();
    setTimeout(function() {
        EC.Utils.HideLoader();
    }, 1500);
});
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
(function (ec) {
    ec.Notify = ec.Notify || {};
    ec.Notify.Info = function (content) {
        notify(content, ec.Enums.MessageTypes.info, "Information");
    }
    ec.Notify.Success = function (content) {
        notify(content, ec.Enums.MessageTypes.success, "Success");
    }
    ec.Notify.Warning = function (content) {
        notify(content, ec.Enums.MessageTypes.warning, "Warning");
    }
    ec.Notify.Error = function (content) {
        notify(content, ec.Enums.MessageTypes.danger, "Error");
    }

    function notify(c, t, ti) {
        toastr[t](c, ti);
    }

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "3000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    ec.Sound = ec.Sound || {};
    ec.Sound.Clock = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long1.mp3");
        sound.play();
    }
    ec.Sound.Inbox = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long2.mp3");
        sound.play();
    }
    ec.Sound.Alert = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short1.mp3");
        sound.play();
    }
    ec.Sound.Chat = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short2.mp3");
        sound.play();
    }
    ec.Sound.InstantMessage = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short3.mp3");
        sound.play();
    }
    ec.Sound.Toast = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short4.mp3");
        sound.play();
    }
})(EC);
(function () {

    EC.Enums = EC.Enums || {};
    EC.Enums.DateType = {
        NotSet: 0,
        Second: 1,
        Minute: 2,
        Hour: 3,
        Day: 4
    };

    EC.Enums.HtmlAttributes = {
        _async: "async",
        _autocomplete: "autocomplete",
        _autofocus: "autofocus",
        _autoplay: "autoplay",
        _challenge: "challenge",
        _charset: "charset",
        _checked: "checked",
        _cite: "cite",
        _class: "class",
        _cols: "cols",
        _colspan: "colspan",
        _command: "command",
        _content: "content",
        _contenteditable: "contenteditable",
        _contextmenu: "contextmenu",
        _controls: "controls",
        _coords: "coords",
        _crossorigin: "crossorigin",
        _data: "data",
        _datetime: "datetime",
        _default: "default",
        _defer: "defer",
        _dir: "dir",
        _dirname: "dirname",
        _disabled: "disabled",
        _download: "download",
        _draggable: "draggable",
        _dropzone: "dropzone",
        _enctype: "enctype",
        _for: "for",
        _form: "form",
        _formaction: "formaction",
        _formenctype: "formenctype",
        _formmethod: "formmethod",
        _formnovalidate: "formnovalidate",
        _formtarget: "formtarget",
        _headers: "headers",
        _height: "height",
        _hidden: "hidden",
        _high: "high",
        _href: "href",
        _hreflang: "hreflang",
        _http_equiv: "http_equiv",
        _icon: "icon",
        _id: "id",
        _inputmode: "inputmode",
        _ismap: "ismap",
        _itemid: "itemid",
        _itemprop: "itemprop",
        _itemref: "itemref",
        _itemscope: "itemscope",
        _itemtype: "itemtype",
        _keytype: "keytype",
        _kind: "kind",
        _label: "label",
        _lang: "lang",
        _list: "list",
        _loop: "loop",
        _low: "low",
        _manifest: "manifest",
        _max: "max",
        _maxlength: "maxlength",
        _media: "media",
        _mediagroup: "mediagroup",
        _menu: "menu",
        _method: "method",
        _min: "min",
        _minlength: "minlength",
        _multiple: "multiple",
        _muted: "muted",
        _name: "name",
        _nonce: "nonce",
        _novalidate: "novalidate",
        _open: "open",
        _optimum: "optimum",
        _pattern: "pattern",
        _placeholder: "placeholder",
        _poster: "poster",
        _preload: "preload",
        _radiogroup: "radiogroup",
        _readonly: "readonly",
        _rel: "rel",
        _required: "required",
        _reversed: "reversed",
        _rows: "rows",
        _rowspan: "rowspan",
        _sandbox: "sandbox",
        _spellcheck: "spellcheck",
        _scope: "scope",
        _scoped: "scoped",
        _seamless: "seamless",
        _selected: "selected",
        _shape: "shape",
        _size: "size",
        _sizes: "sizes",
        _sortable: "sortable",
        _sorted: "sorted",
        _span: "span",
        _src: "src",
        _srcdoc: "srcdoc",
        _srclang: "srclang",
        _srcset: "srcset",
        _start: "start",
        _step: "step",
        _style: "style",
        _tabindex: "tabindex",
        _target: "target",
        _title: "title",
        _translate: "translate",
        _type: "type",
        _typemustmatch: "typemustmatch",
        _usemap: "usemap",
        _value: "value",
        _width: "width",
        _wrap: "wrap"
    };

    EC.Enums.MessageTypes = {
        default: "default",
        success: "success",
        warning: "warning",
        danger: "error",
        info: "info"
    };

    EC.Enums.MessageState = {
        success: 1,
        warning: 2,
        info: 3,
        error: 4
    };

    EC.Enums.SortType = {
        asc: "asc",
        desc: "desc"
    };
})();
(function (ec) {
    ec.LocalStorage = ec.LocalStorage || {};
    ec.LocalStorage.Get = function (name, type) {
        return ec.Utils.Deserialize(window.localStorage.getItem(name), type);
    };

    ec.LocalStorage.Set = function (name, value) {
        window.localStorage.setItem(name, ec.Utils.Serialize(value));
    };

    ec.LocalStorage.Remove = function (name) {
        window.localStorage.removeItem(name);
    };

    ec.LocalStorage.Clear = function () {
        window.localStorage.clear();
    };


    ec.SessionStorage = ec.SessionStorage || {};
    ec.SessionStorage.Get = function (name, type) {
        return ec.Utils.Deserialize(window.sessionStorage.getItem(name), type);
    };

    ec.SessionStorage.Set = function (name, value) {
        window.sessionStorage.setItem(name, ec.Utils.Serialize(value));
    };

    ec.SessionStorage.Remove = function (name) {
        window.sessionStorage.removeItem(name);
    };

    ec.SessionStorage.Clear = function () {
        window.sessionStorage.clear();
    }
})(EC);