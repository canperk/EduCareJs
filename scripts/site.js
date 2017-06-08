$(document).ready(function () {

    //Notification
    $("#btnNotiSuc").click(function () {
        EC.Notify.Success("it worked!");
    });
    $("#btnNotiErr").click(function () {
        EC.Notify.Error("something went wrong");
    });
    $("#btnNotiWar").click(function () {
        EC.Notify.Warning("connection is slow...");
    });
    $("#btnNotiInf").click(function () {
        EC.Notify.Info("1 mail received");
    });


    //Exception
    $("#btnExcUnd").click(function () {
        console.log(a);
    });

    //Exception
    $("#btnCooSet").click(function () {
        EC.Cookies.Set("name", "value", 1, EC.Enums.DateType.Minute);
        EC.Notify.Success("cookie was set");
    });
    $("#btnCooGet").click(function () {
        var value = EC.Cookies.Get("name");
        if (value)
            EC.Notify.Info("Cookie value : " + value);
        else
            EC.Notify.Error("Cookie does not exist anymore");
    });
});