var EC = EC || {};
(function () {
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

    EC.NewGuid = function () {
        var _func = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        var guid = (_func() + _func() + "-" + _func() + "-4" + _func().substr(0, 3) + "-" + _func() + "-" + _func() + _func() + _func()).toLowerCase();
        return guid;
    }

    EC.IsNullOrEmpty = function (text) {
        var r = !text || !/[^\s]+/.test(text);
        return r;
    }
})();