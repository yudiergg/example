$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter click', function(){
        $('header .gnb .depth1 > li').on('mouseleave', function(){
            $('header .gnb .depth1 li .depth2.active').removeClass('active')
        })
        $(this).find('.depth2').addClass('active')
        $('header').on('mouseleave', function(){
            $('header .gnb .depth1 li .depth2.active').removeClass('active')
        })
    })

    var first = 0
    var iamges = $('.imageslide ul li a')
    var total = iamges.length

    iamges.hide().eq(0).show()
    setInterval(function(){
        iamges.eq(first).fadeOut(800)
        first = (first + 1) % total
        iamges.eq(first).fadeIn(800)
    }, 4000)
})