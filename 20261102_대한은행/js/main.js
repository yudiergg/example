$(document).ready(function(){
    $('header nav .depth1 li').on('mouseenter',function(){
        $('header nav .depth2').addClass('active')
        $('header').on('mouseleave',function(){
        $('header nav .depth2').removeClass('active')
        })
    })

    // var first = 0
    // var images = $('.visual ul li')
    // var total = images.length

    // $(images).hide().eq(0).show()
    // setInterval(function(){
    //     images.eq(first).fadeIn()
    //     first = (first + 1) % total
    //     images.eq(first).fadeOut()
    // },4000)


    $('.news .tab button').on('click', function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

    // var first = 0
    // var images = $('')
    // var total = images.length

    // $(images).hide().eq(0).show()
    // setinerval(function(){
    //     images.eq(first).fadeIn()
    //     first = (first + 1) % total
    //     images.eq(first).fadeOut()
    // }, 4000)
})