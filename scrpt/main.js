$(document).ready(function(){
    $('header .gnb .main li a').on('mouseenter', function(){
        $('header .gnb .sub').slideDown(200)
    })
    $('header .gnb .sub').on('mouseleave', function(){
        $('header .gnb .sub').slideUp(200)
    })

    // setInterval(function(){
    //     $('.visual ul li a img').delay(1000).animate({'marginLeft':'-1200px'}, 1000)
    //     $('.visual ul li a img').delay(1000).animate({'marginLeft':'-2400px'}, 1000)
    //     $('.visual ul li a img').delay(1000).animate({'marginLeft':'0'}, 1000)
    // })
    // setInterval(function(){
    //     $('.visual ul li a img').delay(1000).animate({'marginTop':'-300px'}, 1500)
    //     $('.visual ul li a img').delay(1000).animate({'marginTop':'-600px'}, 1500)
    //     $('.visual ul li a img').delay(1000).animate({'marginTop':'0'}, 1500)
    // })
    // var first = "0"
    // var images = $('.visual ul li a img')
    // var total = images.length

    // images.hide().eq(first).show()
    // setInterval(function(){
    //     images.eq(first).fadeIn(800)
    //     first = (first + 1) % total
    //     images.eq(first).fadeOut(800)
    // }, 1000)

})