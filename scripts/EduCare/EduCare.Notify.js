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