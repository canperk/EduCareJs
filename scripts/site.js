(function ($) {
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

        //Extensions
        $("#btnExtChi").click(function () {
            $("#btnExcUnd").changeIcon("cog");
        });
        $("#btnExtRei").click(function () {
            $("#btnExcUnd").removeIcon();
        });
        $("#btnExtCt1").click(function () {
            $("#btnExcUnd").changeType("success");
        });
        $("#btnExtCt2").click(function () {
            $("#btnExcUnd").changeType("danger");
        });

        //JSON
        $("#btnJSONDse").click(function () {
            var json = $("#preJson").text();
            var p = EC.Utils.Deserialize(json, person);
            console.log(p);
        });

        //Sound
        $("#btnSoundClock").click(function () {
            EC.Sound.Clock();
        });
        $("#btnSoundInbox").click(function () {
            EC.Sound.Inbox();
        });
        $("#btnSoundAlert").click(function () {
            EC.Sound.Alert();
        });
        $("#btnSoundChat").click(function () {
            EC.Sound.Chat();
        });
        $("#btnSoundInstantMessage").click(function () {
            EC.Sound.InstantMessage();
        });
        $("#btnSoundToast").click(function () {
            EC.Sound.Toast();
        });
    });

    //Custom Models For JSON
    var person = function () {
        this.id = 0;
        this.firstName = "";
        this.lastName = "";
        this.emails = [];
    };
})($)
