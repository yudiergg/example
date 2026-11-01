$(document).ready(function(){
    $('header nav .dpeth1 li').on('mouseenter',function(){
        $(this).find('.depth2').addClass('active')
        $(this).siblings().find('.depth2').removeClass('active')
    })

    // $('.news .tab .gallery button').on('click',function(){
    //     $('.news .tab .gallery').addClass('active')
    //     $('.news .tab .notcie').removeClass('active')
    // })
    //  $('.news .tab .notcie button').on('click',function(){
    //     $('.news .tab .gallery').removeClass('active')
    //     $('.news .tab .notcie').addClass('active')
    // })

    // setInterval(function(){
    //     var images = $('.visual ul')
    //     images.delay(1000).animate({'marginTop':'-300'}, 2000)
    //     images.delay(1000).animate({'marginTop':'-600'}, 2000)
    //     images.delay(1000).animate({'marginTop':'0'}, 2000)
    // })
    // setInterval(function(){
    //     var images = $('.visual ul')
    //     images.delay(1000).animate({'marginLeft':'-1200'}, 2000)
    //     images.delay(1000).animate({'marginLeft':'-2400'}, 2000)
    //     images.delay(1000).animate({'marginLeft':'-0'}, 2000)
    // })
    var first = 0
    var images = $('.visual ul li a')
    var total = images.length

    $(images).hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeIn()
        first = (first + 1) % total
        images.eq(first).fadeOut()
    },4000)

    
    $('.news .tab button').on('click', function(){
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
    });

})
