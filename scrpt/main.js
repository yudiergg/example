$(document).ready(function(){
    $('header .gnb .main li a').on('mouseenter', function(){
        $('header .gnb .sub').slideDown(400)
    })
    $('header .gnb').on('mouseleave', function(){
        $('header .gnb .sub').slideUp(400)
    })

    // setInterval(function(){
    //     var images = $('.visual ul li a img')
    //     images.delay(1000).animate({'marginLeft':'-1200'}, 1000)
    //     images.delay(1000).animate({'marginLeft':'-2400'}, 1000)
    //     images.delay(1000).animate({'marginLeft':'0'}, 1000)
    // })
    // setInterval(function(){
    //     var images = $('.visual ul li a img')
    //     images.delay(1000).animate({'marginTop':'-350'}, 1000)
    //     images.delay(1000).animate({'marginTop':'-700'}, 1000)
    //     images.delay(1000).animate({'marginTop':'0'}, 1000)
    // })

    var first = 0
    var images = $('.visual ul li a img')
    var total = images.length

    images.hide().eq(first).show()
    setInterval(function(){
        images.eq(first).fadeIn(800)
        first = (first + 1) % total
        images.eq(first).fadeOut(800)
    }, 4000)

    $('.news .notice .tab .detail li a').on('click', function(){
        $('.modal').addClass('active')
    })
    $('.btn_close').on('click', function(){
        $('.modal').removeClass('active')
    })
})