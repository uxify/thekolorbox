$(document).ready(function () {

    //Section 4 slider
    slider();

    //Menu Function
    menuFn();

    //OnScroll function
    $(window).bind('scroll', scrollFn.bind(this));


});



function slider() {
    $(".sliderImageWrap:gt(0)").hide();
    setInterval(function () {
        $('.sliderImageWrap:first')
            .fadeOut(300)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#sliderImage');
    }, 5000);
    //Slider End
}

function menuFn() {
    $("#menuIcon").click(function () {
        $("#menuBox").css({ 'right': '0' });
        setTimeout(function () {
            $("#menuBox").css({ 'background': '#ffffffb3' });
            $(".menuWrap").css({ 'right': '0' });
        }, 200);
    });

    $("#menuClose").click(function () {
        $("#menuBox").css({ 'background': '#ffffff00' });
        $(".menuWrap").css({ 'right': '-322px' });
        setTimeout(function () {
            $("#menuBox").css({ 'right': '-100%' });
        }, 300);
    });
}

function scrollFn() {
    const offset = $(document).scrollTop();
    if (offset > 1900 && offset<2500) {
        const sliderOffset = $("#imageSlider").offset().top;
        if (sliderOffset-offset>62 && sliderOffset-offset<100) {
            const sliderToggle = $("#imageSlider").hasClass("sliderFixed");
            if (!sliderToggle) {
                $("#imageSlider").addClass("sliderFixed");
            }else{
                $("#imageSlider").removeClass("sliderFixed");
            }
        }
    }else if (offset < 500) {
        const sliderToggle = $("#imageSlider").hasClass("sliderFixed");
        if(sliderToggle){
            $("#imageSlider").removeClass("sliderFixed");
        }
        const toggleClass = $("header").hasClass("headerScroll");
        if (!toggleClass && offset > 200) {
            $("header").addClass("headerScroll");
        } else if (toggleClass && offset < 200) {
            $("header").removeClass("headerScroll");
        }
    }else{
        return;
    }

}