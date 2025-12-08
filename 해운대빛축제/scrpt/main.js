$(document).ready(function(){
    $('header .gnb .depth1 li').on('mouseenter',function(){
        $(this).children('.depth2').addClass('active')
    })
    $('header .gnb .depth1 li').on('mouseleave',function(){
        $(this).children('.depth2').removeClass('active')
    })
    // setInterval(function(){
    //     $('.contaier .visual ul li a').delay(2000).animate({'marginLeft': '-800'},1000)
    //     $('.contaier .visual ul li a').delay(2000).animate({'marginLeft': '-1600'},1000)
    //     $('.contaier .visual ul li a').delay(1000).animate({'marginLeft': '0'},1000)
    // })
    //     setInterval(function(){
    //     $('.contaier .visual ul li a').delay(1000).animate({'marginTop': '-350'},1000)
    //     $('.contaier .visual ul li a').delay(1000).animate({'marginTop': '-700'},1000)
    //     $('.contaier .visual ul li a').delay(1000).animate({'marginTop': '0'},1000)
    // })
    $('.content .news button').on('click', function(){
        const parent = $(this).parent('li')
        if (parent.hasClass('notice')) {
            $('.content .news .tab .notice').addClass('active')
            $('.content .news .tab .galiery').removeClass('active')
        } else {
            $('.content .news .tab .galiery').addClass('active')
            $('.content .news .tab .notice').removeClass('active')
        }
    })
})