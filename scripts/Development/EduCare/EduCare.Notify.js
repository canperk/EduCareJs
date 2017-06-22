(function (ec) {
    ec.Notify = ec.Notify || {};
    ec.Notify.Info = function (content) {
        notify(content, ec.Enums.MessageTypes.info, "Information", "fa fa-info");
    }
    ec.Notify.Success = function (content) {
        notify(content, ec.Enums.MessageTypes.success, "Success", "fa fa-check");
    }
    ec.Notify.Warning = function (content) {
        notify(content, ec.Enums.MessageTypes.warning, "Warning", "fa fa-warning");
    }
    ec.Notify.Error = function (content) {
        notify(content, ec.Enums.MessageTypes.danger, "Error", "fa fa-exclamation");
    }

    function notify(c, t, ti, i) {
        $.notify({
            title: ti,
            message: c,
            icon: i
        }, {
                type: t,
                newest_on_top: true,
                delay: 5000,
                z_index: 10000,
                template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">x</button>' +
                '<span data-notify="icon"></span> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
            });
    }

    ec.Sound = ec.Sound || {};
    ec.Sound.Clock = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long1.mp3");
        sound.play();
    }
    ec.Sound.Inbox = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long2.mp3");
        sound.play();
    }
    ec.Sound.Alert = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short1.mp3");
        sound.play();
    }
    ec.Sound.Chat = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short2.mp3");
        sound.play();
    }
    ec.Sound.InstantMessage = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short3.mp3");
        sound.play();
    }
    ec.Sound.Toast = function(){
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short4.mp3");
        sound.play();
    }
})(EC);