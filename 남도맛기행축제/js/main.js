$(document).ready(function(){
    $('header .gnb .depth1 li a').on('mouseenter', function(){
        // $(this).siblings('.depth2').addClass('active');
        $(this).siblings('.depth2').addClass('active');
    })
    $('header .gnb .depth1 li a').on('mouseleave', function(){
        // $(this).siblings('.depth2').removeClass('active');
        $(this).siblings('.depth2').removeClass('active');
    })

    // var first = 0
    // var iamges = $('.content .visual ul li a')
    // var total = iamges.length

    // images.hide().eq(0).show()
    // setInterval(function(){
    //     images.eq(first).fadeOut(800)
    //     first = (first + 1) % total
    //     images.eq(first).fadeIn(800)
    // }, 4000)
    // setInterval(function(){
    //     $('.content .visual ul li a').delay(1000).animate({'marginLeft': '-790'}, 1000)
    //     $('.content .visual ul li a').delay(1000).animate({'marginLeft': '-1580'}, 1000)
    //     $('.content .visual ul li a').delay(1000).animate({'marginLeft': '0'}, 1000)
    // })
    setInterval(function(){
        $('.content .visual ul li a').delay(1000).animate({'marginTop': '-350'}, 1000)
        $('.content .visual ul li a').delay(1000).animate({'marginTop': '-700'}, 1000)
        $('.content .visual ul li a').delay(1000).animate({'marginTop': '0'}, 1000)
    })
})