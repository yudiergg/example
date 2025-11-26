$(document).ready(function(){
    // console.log('test')
    $('header .gnb ul li a').on('mouseenter click', function(){
        $('header .gnb_sub').addClass('active')
        $('header').on('mouseleave', function(){
            $('header .gnb_sub').removeClass('active')
        })
    })

    var first = 0
    var images = $('.visual ul li')
    var total = images.length
    
    images.hide().eq(0).show()
    setInterval(function(){
        images.eq(first).fadeOut(800)
        first = (first + 1) % total
        images.eq(first).fadeIn(800)
    }, 4000)
})