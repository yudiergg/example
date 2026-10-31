$(document).ready(function(){
    $('header .gnb').hide()
    $('header nav ul li a').on('mouseenter click',function(){
        $('header .gnb').slideDown().show(30)
    })
    $('header').on('mouseleave',function(){
        $('header .gnb').slideUp().hide(30)
    })
    setInterval(function(){
        $('.visual ul').delay(1000).animate({'marginLeft': '-1200'}, 1000)
        $('.visual ul').delay(1000).animate({'marginLeft': '-2400'}, 1000)
        $('.visual ul').delay(1000).animate({'marginLeft': '0'}, 1000)
    })
    
    // $('header nav ul li a').on('mouseenter click', function(){
    //     //   console.log('클릭하고있니?')
    //     $('header .gnb').addClass('active')
    // })
    // $('header').on('mouseleave',function(){
    //     $('header .gnb').removeClass('active')
    // })
    // $('.news .tab .galiery button').on('click', function(){
    //     $('.news .tab .notice ul').removeClass('active')
    //     $('.news .tab .galiery ul').addClass('active')    
    // })
    // $('.news .tab .notice button').on('click', function(){
    //     $('.news .tab .galiery ul').removeClass('active')
    //     $('.news .tab .notice ul').addClass('active')    
    // })
    $('.news .tab button').on('click', function(){
        $('.news .tab ul').removeClass('active')
        $(this).siblings('ul').addClass('active')
    })
})