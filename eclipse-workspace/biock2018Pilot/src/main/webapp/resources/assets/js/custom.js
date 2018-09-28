$.fn.extend({
    ajaxSubmit: function(a) {
        var b = this[0],
            b = {
                type: b.method,
                url: b.action,
                data: new FormData(b),
                processData: !1,
                contentType: !1
            };
        a = $.extend(!0, {}, b, a ? a : {});
        return $.ajax(a)
    }
});
$(document).ready(function() {
    $("select").material_select();
    $(".button-collapse").sideNav();
    $(".dropdown-button").dropdown();
    $(".modal").modal();
    $(document).on("keydown", "input.nonNegative", function(a) {
        if (!(95 < a.keyCode && 106 > a.keyCode || 47 < a.keyCode && 58 > a.keyCode || 8 == a.keyCode || 9 == a.keyCode || 190 == a.keyCode)) return !1
    });
    $(document).on("keydown", "input.nonNegativeInteger", function(a) {
        if (!(95 < a.keyCode && 106 > a.keyCode || 47 < a.keyCode && 58 > a.keyCode || 8 == a.keyCode || 9 == a.keyCode)) return !1
    });
    $("input.notZeroFirst").keydown(function(a) {
        if (0 ==
            this.value.length && 48 == a.keyCode) return !1
    })
});

function sendGoogleAnalyticsData(a) {
    "undefined" != typeof ga && (a.eventLabel = a.eventLabel || "", a.eventLabel += "_" + $("#gbl_userId").val(), ga("send", a))
}

function overrideSelect2ScrollBug(a) {
    var b;
    a.on("select2:selecting select2:unselecting", function(a) {
        b = $("#" + a.params.args.data._resultId).parent().prop("scrollTop");
        $(".select2-search__field").css({
            width: "580px"
        });
        $(".select2-search__field").focus()
    });
    a.on("select2:select select2:unselect", function(a) {
        $("#" + a.params.data._resultId).parent().prop("scrollTop", b);
        $(".select2-search__field").css({
            width: "580px"
        });
        $(".select2-search__field").focus()
    })
}

function materialSelectForIE(a) {
    a.material_select(function() {
        $("input.select-dropdown").trigger("close")
    });
    a.siblings("input.select-dropdown").on("mousedown", function(a) {
        (a.clientX >= a.target.clientWidth || a.clientY >= a.target.clientHeight) && a.preventDefault()
    })
}
$(function() {
    var a = 1;
    $(":input").each(function() {
        "hidden" != this.type && ($(this).attr("tabindex", a), a++)
    })
});