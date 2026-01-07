$(document).ready(function(){
    $('header .gnb .main li').on('mouseenter', function(){
        $(this).children('.sub').addClass('active');
    })
    $('header .gnb .main li').on('mouseleave', function(){
        $(this).children('.sub').removeClass('active');
    })

    setInterval(function(){
        var images = $('.content .visual .slide li a img')
        images.delay(1000).animate({'marginTop':'-400'}, 2000)
        images.delay(1000).animate({'marginTop':'-800'}, 2000)
        images.delay(1000).animate({'marginTop':'0'}, 2000)
    })

    // $('.tab .button_wrap ul li button').on('click', function(){
    //     $(this).parent('li').addClass('active')
    //     $('.tab .tabpanels').children('.notice').hide()
    //     $('.tab .tabpanels').children('.gallery').show()
    // })

    $('.tab .button_wrap ul li button').on('click', function () {
    // 탭 active 처리
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    });

})