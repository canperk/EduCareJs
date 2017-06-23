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