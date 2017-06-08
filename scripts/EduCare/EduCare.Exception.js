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

    p.Exception.HandleException();
})(EC);