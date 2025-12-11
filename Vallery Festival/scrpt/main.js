$(document).ready(function(){
    // setInterval(function(){
    //     $('.content .visual ul').delay(1000).animate({'marginLeft': '-870'}, 4000)
    //     $('.content .visual ul').delay(1000).animate({'marginLeft': '-1740'}, 4000)
    //     $('.content .visual ul').delay(1000).animate({'marginLeft': '0'}, 4000)
    // })
    // $('header .gnb .main li a').on('mouseenter', function(){
    //     $(this).siblings('.sub').show(200)
    // })
    // $('header .gnb .main li a').on('mouseleave', function(){
    //     $(this).siblings('.sub').hide(200)
    // })
    // $('header .gnb .main li').on('mouseenter', function(){
    //     $(this).children('.sub').stop().slideDown()
    // })
    // $('header .gnb .main li').on('mouseleave', function(){
    //     $(this).children('.sub').stop().slideUp()
    // })
    // $('header .gnb .main li').on('mouseenter', function(){
    //     $(this).find('.sub').show(200)
    // })
    // $('header .gnb .main li').on('mouseleave', function(){
    //     $(this).find('.sub').hide(200)
    // })

    $('header .gnb .main li a').on('mouseenter', function(){
        $(this).siblings('.sub').stop().slideDown()
    })
    $('header .gnb .main li a').on('mouseleave', function(){
        $(this).siblings('.sub').stop().slideUp()
    })
})