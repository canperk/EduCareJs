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