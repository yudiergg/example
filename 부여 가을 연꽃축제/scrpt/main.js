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
    setInterval(function(){
        $('.content .visual ul').delay(1000).animate({'marginLeft': '-850'}, 1000)
        $('.content .visual ul').delay(1000).animate({'marginLeft': '-1700'}, 1000)
        $('.content .visual ul').delay(1000).animate({'marginLeft': '0'}, 1000)
    })
})