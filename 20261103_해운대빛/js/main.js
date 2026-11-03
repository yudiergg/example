$(document).ready(function(){
    $('header nav .depth1 li .depth2').hide()
    $('header nav .depth1 li a').on('mouseenter',function(){
        $('header nav .depth1 li .depth2').stop().slideUp()
        $(this).siblings('.depth2').stop().slideDown()
    })
    $('header nav').on('mouseleave', function(){
        $('.depth2').hide()
    })
    // var first = 0
    // var images = $('.visual ul li a img')
    // var total = images.length

    // images.hide().eq(first).show()
    // setInterval(function(){
    //     images.eq(first).fadeOut()
    //     first = (first + 1) % total
    //     images.eq(first).fadeIn()
    // }, 4000)

    $('.news .tab ul button').on('click',function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    })

    $('.news .tab ul .notice.active ul li a').on('click',function(e){
        e.preventDefault();
        $('.modal').addClass('active')
    })
    $('.modal button').on('click',function(){
      $('.modal').removeClass('active')
    })
})