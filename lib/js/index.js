var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.full'),
    halfvh = vHeight/2,
    thirdvh = vHeight/3,
    halfvw = vWidth/2.5,
    quartvh = vHeight/4

var bodies = ['#intro', '#work', '#exp', '#edu', '#con', '#workpage'];
var darkcolors = ['#141a20', '#12161a', '#0e1013', '#070809', '#050506', '#222']
var lightcolors = ['#f2f2f2', '#f9f9f9', '#ffffff', '#f5f5f5', '#eeeeee', '#eee'];


cover.css({"min-height":vHeight,"max-width":vWidth,});

$("#thanks").css({"padding-top": thirdvh,});
//$("#intro .row:first-child").css({"padding-top": quartvh/1.5,});
$("#navb").css({"max-width": vWidth,});

function thankredirect(){
    var i = 3
    setInterval(function(){
        document.getElementById('cntdown').innerHTML = i;
        if(i > 0) {
            i--
        }
    }, 1000)
}

function modetoggle(){
    var i = 0;
    $('.theme_toggle button').toggleClass('btn-outline-dark')
    if($('body')[0].className.indexOf('dark-mode') > -1) {
        while(i < bodies.length) {
            $(bodies[i]).css({"background-color": lightcolors[i],});
            i++;
        }
    } else {
//        $('body').addClass('text-white dark-mode');
//        $('nav').addClass('navbar-dark bg-dark')
        while(i < bodies.length) {
            $(bodies[i]).css({"background-color": darkcolors[i],});
            i++;
        }
    }
    $('body').toggleClass('text-white dark-mode')
    $('nav').toggleClass('navbar-dark bg-dark')
}

function darkmode() {
    var i = 0
    while (i < bodies.length) {
        $(bodies[i]).css({"background-color": darkcolors[i],});
        i++;
    }
}

function lightmode(){
    var i = 0;
    while (i < bodies.length) {
        $(bodies[i]).css({"background-color": lightcolors[i],});
        i++;
    }
//    $('#question').modal('hide');
}

$('.theme_toggle button').on('click', modetoggle)

function copyText(str) {
    navigator.clipboard.writeText(String(str))
    window.alert(str + ' copied to clipboard')
}

darkmode()