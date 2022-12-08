$('.click-box1').click(function() {
    $('.click-box1').css({
        color: '#fff',
        backgroundColor: '#161616'
    })
    $('.click-box2').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.click-box3').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.move-box:nth-child(1)').css({
        display : 'block'
    },500)
    $('.move-box:nth-child(2)').css({
        display : 'none'
    },500)
    $('.move-box:nth-child(3)').css({
        display : 'none'
    },500)
});

$('.click-box2').click(function() {
    $('.click-box1').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.click-box2').css({
        color: '#fff',
        backgroundColor: '#161616'
    })
    $('.click-box3').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.move-box:nth-child(1)').css({
        display : 'none'
    },500)
    $('.move-box:nth-child(2)').css({
        display : 'block'
    },500)
    $('.move-box:nth-child(3)').css({
        display : 'none'
    },500)
});

$('.click-box3').click(function() {
    $('.click-box1').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.click-box2').css({
        color: '#c3c3c3',
        backgroundColor: '#e7e7e7'
    })
    $('.click-box3').css({
        color: '#fff',
        backgroundColor: '#161616'
    })
    $('.move-box:nth-child(1)').css({
        display : 'none'
    },500)
    $('.move-box:nth-child(2)').css({
        display : 'none'
    },500)
    $('.move-box:nth-child(3)').css({
        display : 'block'
    },500)
});


$('.recruit-hover1').mouseover(function() {
    $('.recruit-hover1').stop().animate({
        width: 180 + 'px',
        height: 60 + 'px',
    })
    $('.recruit-hover1 p').stop().css({
        display: 'block'
    })
})

$('.recruit-hover1').mouseout(function() {
    $('.recruit-hover1').stop().animate({
        width: 55 + 'px',
        height: 60 + 'px',
    }, 500)
    $('.recruit-hover1 p').stop().css({
        display: 'none'
    } ,500)
})

$('.recruit-hover2').mouseover(function() {
    $('.recruit-hover2').stop().animate({
        width: 180 + 'px',
        height: 60 + 'px',
    })
    $('.recruit-hover2 p').stop().css({
        display: 'block'
    })
})

$('.recruit-hover2').mouseout(function() {
    $('.recruit-hover2').stop().animate({
        width: 55 + 'px',
        height: 60 + 'px',
    }, 500)
    $('.recruit-hover2 p').stop().css({
        display: 'none'
    } ,500)
})

$('.recruit-hover3').mouseover(function() {
    $('.recruit-hover3').stop().animate({
        width: 180 + 'px',
        height: 60 + 'px',
    })
    $('.recruit-hover3 p').stop().css({
        display: 'block'
    })
})

$('.recruit-hover3').mouseout(function() {
    $('.recruit-hover3').stop().animate({
        width: 55 + 'px',
        height: 60 + 'px',
    }, 500)
    $('.recruit-hover3 p').stop().css({
        display: 'none'
    } ,500)
})
