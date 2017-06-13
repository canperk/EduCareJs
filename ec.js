/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function (ec, $) {
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
        let message = "Something went wrong!";
        if (ec.Notify)
            ec.Notify.Error(message);
        else
            alert(message);
    }
})(EC, $);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function (ec) {
    ec.Cookies = ec.Cookies || {};
    ec.Cookies.Set = function (name, value, expire, type) {
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
    ec.Cookies.Get = function (name) {
        var n = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(n) == 0) return c.substring(n.length, c.length);
        }
        return null;
    }
})(EC);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

(function (ec) {
    ec.Exception = ec.Exception || {};
    ec.Exception.HandleException = function () {
        window.onerror = function (msg, url, line, col, error) {
            if (ec.Notify) {
                ec.Notify.Error("[Exception] : " + msg);
            }
            else {
                var extra = !col ? '' : '\ncolumn: ' + col;
                extra += !error ? '' : '\nerror: ' + error;
                alert("Error: " + msg + "\nurl: " + url + "\nline: " + line + extra);
            }
            return true;
        };
    }

    ec.Exception.HandleException();
})(EC);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

(function (ec) {
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
})(EC);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

(function(ec, ko){
    ec.BaseViewModel = {
        canInsert : ko.observable(false),
        canDelete : ko.observable(false),
        canUpdate : ko.observable(false)
    };
    ec.init = function(model, element){
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
})(EC, ko);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

(function (ec, $) {
    ec.Notify = ec.Notify || {};
    ec.Notify.Info = function (content) {
        notify(content, "info", "Information");
    }
    ec.Notify.Success = function (content) {
        notify(content, "success", "Success");
    }
    ec.Notify.Warning = function (content) {
        notify(content, "warning", "Warning");
    }
    ec.Notify.Error = function (content) {
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
})(EC, $);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var EC = EC || {};
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

    EC.Models = {};
})();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.CategoryId = ko.observable(0);
    self.CategoryName = ko.observable("");
    self.Description = ko.observable("");
})(EC, ko);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.ProductId = ko.observable(0);
    self.ProductName = ko.observable("");
    self.UnitPrice = ko.observable("");
    self.UnitsInStock = ko.observable("");
    self.Category = ko.observable({});
    self.Supplier = ko.observable({});
})(EC, ko);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

(function(ec, ko){
    ec.Models.Product = ec.Models.Product || {};
    var self = this;
    self.SupplierId = ko.observable(0);
    self.CompanyName = ko.observable("");
    self.ContactName = ko.observable("");
    self.Phone = ko.observable("");
})(EC, ko);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(6);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(7);
__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ })
/******/ ]);