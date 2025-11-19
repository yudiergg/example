$(document).ready(function(){
    $('header .gnb .depth2').hide()
    $('header .gnb .depth1 > li > a').on('mouseenter', function(){
        $('header .gnb .depth2').show()
    })
    $('header .gnb .depth2').on('mouseleave',function(){
        $('header .gnb .depth2').hide()
    })

    var first = 0
    var images = $('.visual .wrapper .image li')
    var total = images.length

    $(images).hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeIn()
        first = (first + 1) % total
        images.eq(first).fadeOut()
    },4000)

    $('.bbs .news .tab li button').on('click', function(){
        
    })
})