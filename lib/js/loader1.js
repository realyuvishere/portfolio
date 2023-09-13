var loaderInterval = window.setInterval(function(){
    $("#ldiv").css('background-color', '#111');
    $("#sdiv").css('background-color', '#fff');
    window.setTimeout(function(){
        $("#ldiv").css('background-color', '#f9f9f9');
        $("#sdiv").css('background-color', '#000');
    }, 2000)
}, 4000);

window.onload = function() {
    $('.loader').addClass("none")
    $('.square, .circle').css('animation', 'none')
    $('.mainbod').removeClass("none")
    $('#question').modal('show')
    window.clearInterval(loaderInterval)
}