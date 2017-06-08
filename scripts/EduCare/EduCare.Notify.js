(function (ec, $) {
    ec.Notify = ec.Notify || {};
    ec.Notify.Info = function (content) {
        notify(content, "info", "Bilgi");
    }
    ec.Notify.Success = function (content) {
        notify(content, "success", "İşlem Başarılı");
    }
    ec.Notify.Warning = function (content) {
        notify(content, "warning", "Uyarı");
    }
    ec.Notify.Error = function (content) {
        notify(content, "danger", "Hata");
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