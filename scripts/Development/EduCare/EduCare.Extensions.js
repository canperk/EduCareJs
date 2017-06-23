(function () {
    $.fn.changeIcon = function (icon) {
        var self = $(this);
        if (self.is("button")) {
            self.find("span.fa").remove();
            var text = self.text().trim();
            var span = '<span class="fa fa-'+ icon +'"></span> ';
            self.html(span + text);
        }
        else
            throw "changeIcon method can be used only with buttons";
    }

    $.fn.removeIcon = function () {
        var self = $(this);
        if (self.is("button")) {
            self.find("span.fa").remove();
            var text = self.text().trim();
            self.html(text);
        }
        else
            throw "removeIcon method can be used only with buttons";
    }

    $.fn.changeType = function (type) {
        var self = $(this);
        if (self.is("button")) {
            self.removeClass("btn-danger");
            self.removeClass("btn-info");
            self.removeClass("btn-default");
            self.removeClass("btn-success");
            self.removeClass("btn-primary");
            self.removeClass("btn-warning");

            self.addClass("btn-"+type);
        }
        else
            throw "changeType method can be used only with buttons";
    }

    $.fn.blink = function (interval) {
        var self = $(this);
        var t = interval || 300;
        setInterval(function(){
            self.css('visibility', function(i, visibility) {
                return (visibility == 'visible') ? 'hidden' : 'visible';
            });            
        }, t);
    }
})();
$(document).ready(function(){
    $(".blink").blink();
    EC.Utils.InitLoader();
    EC.Utils.ShowLoader();
    setTimeout(function() {
        EC.Utils.HideLoader();
    }, 1500);
});