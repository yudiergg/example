$(document).ready(function(){
    $('header .gnb .depth1 li').on('mouseenter click', function(){
        $(this).children('.depth2').addClass('active')
    })
    $('header .gnb .depth1 li').on('mouseleave', function(){
        $(this).children('.depth2').removeClass('active')
    })
    // setInterval(function(){
    //     $('.content .visual ul').delay(1000).animate({'marginTop': '-350'}, 1000)
    //     $('.content .visual ul').delay(1000).animate({'marginTop': '-700'}, 1000)
    //     $('.content .visual ul').delay(1000).animate({'marginTop': '0'}, 1000)
    // })
    var first = 0
    var images = $('.visual ul li')
    var total = images.length
    
    images.hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeOut(800)
        first = (first + 1) % total
        images.eq(first).fadeIn(800)
    }, 4000)
    setInterval(function(){
        $('.content .visual ul').delay(1000).animate({'marginLeft': '-1200'}, 1000)
        $('.content .visual ul').delay(1000).animate({'marginLeft': '-2400'}, 1000)
        $('.content .visual ul').delay(1000).animate({'marginLeft': '0'}, 1000)
    })
})