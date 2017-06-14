var EC = EC || {};
(function () {
    EC.Notify = EC.Notify || {};
    EC.Notify.Info = function (content) {
        notify(content, "info", "Information");
    }
    EC.Notify.Success = function (content) {
        notify(content, "success", "Success");
    }
    EC.Notify.Warning = function (content) {
        notify(content, "warning", "Warning");
    }
    EC.Notify.Error = function (content) {
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
})();