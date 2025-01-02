window.onload = function() {
    $('.loader_text').text('Yuv is here')
    $('.loader .spinner-border').css({'border': 'none'})
    window.setTimeout(function() {
        $('.loader').animate({opacity: 0}, {
            duration: 1000,
            complete: function() {
                $(this).addClass("none")
                $('.mainbod').removeClass('none')
            }
        })
    }, 500)
//    $('.loader').addClass('none')
//    $('.mainbod').removeClass('none')
}