var vHeight = $(window).height(),
    vWidth = $(window).width(),
    cover = $('.full'),
    halfvh = vHeight/2,
    thirdvh = vHeight/3,
    halfvw = vWidth/2.5,
    quartvh = vHeight/4

// var bodies = ['#intro', '#work', '#exp' ,'#con', '#edu'];
// var darkcolors = ['#1D1F1D', '#212529', '#333', '#343a40', '#212121'].reverse()
// var lightcolors = ['#ffffff', '#f2f2f2', '#f9f9f9', '#f5f5f5', '#eeeeee'];


cover.css({"min-height":vHeight,"max-width":vWidth,});

$("#thanks").css({"padding-top": thirdvh,});
//$("#intro .row:first-child").css({"padding-top": quartvh/1.5,});
$("#navb").css({"max-width": vWidth,});

// function thankredirect(){
//     var i = 3
//     setInterval(function(){
//         document.getElementById('cntdown').innerHTML = i;
//         if(i > 0) {
//             i--
//         }
//     }, 1000)
// }

function modetoggle(){
    // var i = 0;
    $('.theme_toggle button').toggleClass('btn-outline-dark')
    $('body').toggleClass('text-white dark-mode')
    $('nav').toggleClass('navbar-dark bg-dark')
    // if($('body')[0].className.indexOf('dark-mode') > -1) {
    //     while(i < bodies.length) {
    //         $(bodies[i]).css({"background-color": lightcolors[i],});
    //         i++;
    //     }
    // } else {
    //     while(i < bodies.length) {
    //         $(bodies[i]).css({"background-color": darkcolors[i],});
    //         i++;
    //     }
    // }
}

// function darkmode() {
    // var i = 0
    // while (i < bodies.length) {
    //     $(bodies[i]).css({"background-color": darkcolors[i],});
    //     i++;
    // }
// }

// function lightmode(){
    // var i = 0;
    // while (i < bodies.length) {
    //     $(bodies[i]).css({"background-color": lightcolors[i],});
    //     i++;
    // }
//    $('#question').modal('hide');
// }

// darkmode()

$('.theme_toggle button').on('click', modetoggle)

function copyText(str) {
    navigator.clipboard.writeText(String(str))
    window.alert(str + ' copied to clipboard')
}

modetoggle()