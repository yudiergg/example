$(document).ready(function(){
    $('header .depth2').hide()
    $('header .gnb .depth1 li a').on('mouseenter',function(){
        $('header .depth2').show()
    })
    $('header .depth2').on('mouseleave',function(){
    $('header .depth2').hide()
    })

    /* 슬라이드 함수 만들기
    1. 먼저 변수 정하기 현재 보여지는거
    2. 총 이미지
    3. 이미지 갯수 */

    var first = 0
    var images = $('.visual ul li')
    var total = images.length

    images.hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeOut(4000)
        first = (first + 1) % total
        images.eq(first).fadeIn(4000)
    })
    
    /*슬라이드 팝업*/
    $('.popup').hide()
    $('.bbs .tab ul.detail li a').on('click', function(){
        $('.popup').show()
    })
    $('.popup .btn').on('click', function(){
        $('.popup').hide()
    })
})