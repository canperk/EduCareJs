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