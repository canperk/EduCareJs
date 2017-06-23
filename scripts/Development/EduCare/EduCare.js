var EC = EC || {};
(function (jq, ec) {
    ec.Utils = ec.Utils || {};
    ec.Utils.Serialize = function (obj) {
        return JSON.stringify(obj);
    }

    ec.Utils.Deserialize = function (str, type) {
        var obj = JSON.parse(str);
        for (var p in obj)
            if ({}.hasOwnProperty.call(obj, p))
                obj[p] = { value: obj[p] };

        return Object.create(type.prototype, obj);
    }

    ec.Utils.NewGuid = function () {
        var _func = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        var guid = (_func() + _func() + "-" + _func() + "-4" + _func().substr(0, 3) + "-" + _func() + "-" + _func() + _func() + _func()).toLowerCase();
        return guid;
    }

    ec.Utils.Format = function (text) {
        var str = this;
        var args = arguments;
        var regex = new RegExp("{-?[0-9]+}", "g");
        return text.replace(regex, function (item) {
            var intVal = parseInt(item.substring(1, item.length - 1));
            var replace;
            if (intVal >= 0)
                replace = args[intVal + 1];
            else if (intVal === -1)
                replace = "{";
            else if (intVal === -2)
                replace = "}";
            else
                replace = "";
            return replace;
        });
    };


    ec.Utils.IsNullOrEmpty = function (text) {
        var r = !text || !/[^\s]+/.test(text);
        return r;
    }
    ec.Utils.InitLoader = function () {
        var lc = jq("body .loadingContainer");
        if (lc.length > 0)
            return;
        var loaderHtml = '<div class="loaderContainerMain"><div class="loadingContainer"><div class="cord leftMove"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord"><div class="ball"></div></div><div class="cord rightMove"><div class="ball" id="first"></div></div><div class="shadows"><div class="leftShadow"></div><div></div><div></div><div></div><div></div><div></div><div class="rightShadow"></div></div></div></div>';
        $("body").append(loaderHtml);
    }

    ec.Utils.ShowLoader = function () {
        var lc = jq("body .loaderContainerMain");
        if (lc.length == 0)
            ec.Utils.InitLoader();
        lc.show();
    }

    ec.Utils.HideLoader = function () {
        var lc = jq("body .loaderContainerMain");
        if (lc.length == 0)
            ec.Utils.InitLoader();
        lc.hide();
    }

})($, EC);