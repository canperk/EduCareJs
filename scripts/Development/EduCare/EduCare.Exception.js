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