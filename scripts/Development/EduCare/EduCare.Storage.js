(function () {
    EC.LocalStorage = EC.LocalStorage || {};
    EC.LocalStorage.Get = function (name) {
        return JSON.parse(window.localStorage.getItem(name));
    };

    EC.LocalStorage.Set = function (name, value) {
        window.localStorage.setItem(name, JSON.stringify(value));
    };

    EC.LocalStorage.Remove = function (name) {
        window.localStorage.removeItem(name);
    };

    EC.LocalStorage.Clear = function () {
        window.localStorage.clear();
    };


    EC.SessionStorage = EC.SessionStorage || {};
    EC.SessionStorage.Get = function (name) {
        return JSON.parse(window.sessionStorage.getItem(name));
    };

    EC.SessionStorage.Set = function (name, value) {
        window.sessionStorage.setItem(name, JSON.stringify(value));
    };

    EC.SessionStorage.Remove = function (name) {
        window.sessionStorage.removeItem(name);
    };

    EC.SessionStorage.Clear = function () {
        window.sessionStorage.clear();
    }
})();