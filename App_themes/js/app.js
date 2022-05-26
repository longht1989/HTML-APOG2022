// init function
var isMobile, isTablet, isDesktop;

$(function() {
    /*check device width*/
    bsContainerWidth = $("body").find('.container-xxl').outerWidth();
    if (bsContainerWidth < 768) {
        console.log("mobile");
        isMobile = true;
    } else if (bsContainerWidth < 960) {
        console.log("tablet");
        isTablet = true;
    } else {
        console.log("desktop");
        isDesktop = true;
    }
    $("#site-header .m-btn").on('click', btnExpandClick);
    /*pin header */
    window.onscroll = function() { windowScroll() };

    $('#payment').on('change', function() {
        var selectedVal = $("#payment option:selected").val();
        if (selectedVal === "transfer") {
            $('#VAInfo').show();
        } else {
            $('#VAInfo').hide();
        }
    });
});

/*customise function*/
// scoll down & pin site header
function windowScroll() {
    var headerHeight = $("#site-header").outerHeight();
    if (document.body.scrollTop > (headerHeight + 20) || document.documentElement.scrollTop > (headerHeight + 20)) {
        $("#site-header").addClass('is-pinned');
    } else {
        $("#site-header").removeClass('is-pinned');
    }
}

function btnExpandClick(e) {
    e.preventDefault();
    e.stopPropagation();
    expandNav();
}

function expandNav() {
    $('#site-header .m-btn').toggleClass('is-active');
    $('#site-header .nav').toggleClass('is-active');
}