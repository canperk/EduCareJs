(function (ec) {
    ec.Notify = ec.Notify || {};
    ec.Notify.Info = function (content) {
        notify(content, ec.Enums.MessageTypes.info, "Information");
    }
    ec.Notify.Success = function (content) {
        notify(content, ec.Enums.MessageTypes.success, "Success");
    }
    ec.Notify.Warning = function (content) {
        notify(content, ec.Enums.MessageTypes.warning, "Warning");
    }
    ec.Notify.Error = function (content) {
        notify(content, ec.Enums.MessageTypes.danger, "Error");
    }

    function notify(c, t, ti) {
        toastr[t](c, ti);
    }

    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": true,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "7000",
        "extendedTimeOut": "3000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }

    ec.Sound = ec.Sound || {};
    ec.Sound.Clock = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long1.mp3");
        sound.play();
    }
    ec.Sound.Inbox = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/long2.mp3");
        sound.play();
    }
    ec.Sound.Alert = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short1.mp3");
        sound.play();
    }
    ec.Sound.Chat = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short2.mp3");
        sound.play();
    }
    ec.Sound.InstantMessage = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short3.mp3");
        sound.play();
    }
    ec.Sound.Toast = function () {
        var sound = new Audio("scripts/development/educare/miscellaneous/sound/short4.mp3");
        sound.play();
    }
})(EC);