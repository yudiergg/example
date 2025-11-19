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

    $('.bbs .news .tab li.active button').show()
    $('.bbs .news .tab .notice ul.active').show()
    $(".tab > li > button").click(function () {
    // 모든 detail ul 숨기기
    $(".tab li ul.detail").removeClass("active");

    // 클릭한 li의 detail ul만 보이기
    $(this).siblings("ul.detail").addClass("active");

    // li(active 상태) 스타일 변경을 위해 active 클래스도 li에 적용
    $(".tab > li").removeClass("active");
    $(this).parent("li").addClass("active");
    });

    $('.bbs .news .tab .notice ul li a').on('click', function(){
        $('.popup .popupwrap').addClass('active')
    })
    $('.popup .popupwrap .btn').on('click', function(){
        $('.popup .popupwrap').removeClass('active')
    })
})
