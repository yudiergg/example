$(document).ready(function(){
    $('header .gnb .depth1 > li').on('mouseenter', function(){
        $('header .gnb .depth2').removeClass('active');  // 다른 메뉴 닫기
        $(this).find('.depth2').addClass('active');      // 현재 메뉴 열기
    });
    $('header').on('mouseleave', function(){
        $('header .gnb .depth2').removeClass('active');
    });

    var first = 0
    var images = $('.visual ul li')
    var total = images.length

    images.hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeIn(800)
        first = (first + 1) % total
        images.eq(first).fadeOut(800)
    }, 4000)
    
    $('.container .news .tab li').on('click',function(){
        $('.container .news .tab li').removeClass('active')
        $(this).addClass('active')
    })

    $('.container .news .tab .notice.active ul li a').on('click', function(){
        $('.popup').addClass('active')
    })
    $('.btn').on('click', function(){
        $('.popup').removeClass('active')
    })

    $('.news .notice .tab .detail li a').on('mouseenter click',function(){
        $('.modal').addClass('active')
    })
    $('.modal.active .modal_wrap .btn_close').on('mouseenter click',function(){
        $('.modal').removeClassClass('active')
    })
})
