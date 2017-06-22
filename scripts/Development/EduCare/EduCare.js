var EC = EC || {};
(function (ec) {
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

    EC.Utils.Format = function (text) {
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
    

    EC.Utils.IsNullOrEmpty = function (text) {
        var r = !text || !/[^\s]+/.test(text);
        return r;
    }
})(EC);