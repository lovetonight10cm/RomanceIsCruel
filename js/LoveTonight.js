const loadingArea = document.querySelector('#loading')
const loadingText = document.querySelector('#loading > p')

window.addEventListener('load', () => {
    //로딩 중 흐릿한 화면
    loadingArea.animate({
        backdropFilter: ['blur(10px)', 'blur(0)'],
        visibility: 'hidden',
    }, {
        duration: 1500,
        delay: 500, //결과를 확인하기 위한임의의 지연시간
        fill: "forwards"
    })

    //로딩 중 텍스트
    //offset: web Animation Api 에서 사용되는 속성.
    //애니메이션의 진행시점을 백분율로 설정하는 사용
    //offset은 애니메이션의 어느 시점에서 특정 스타일이 적용될지를정의
    loadingText.animate(
        [
            {
                opacity: 1,
                offset: .8, //80%
            },
            {
                opacity: 0,
                offset: 1 //100%
            }
        ], {
        duration: 1500,
        delay: 500,
        fill: 'forwards',
        easing: 'ease'
    }
    )
})

/* 스크롤시 fadeIn */
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(0.4rem)', 'blur(0)'],
                },
                {
                    duration: 1500,
                    easing: 'ease',
                    fill: 'forwards'
                }
            )
            obs.unobserve(entry.target)
        }
    });
}

//관찰설정
const fadeObsever = new IntersectionObserver(animateFade)

//관찰지시
const fadeElements = document.querySelectorAll('.fadeIn')

fadeElements.forEach((fadeElement) => {
    fadeObsever.observe(fadeElement)
})

/* 스크롤시 fadeIn smallJY */
const animateFade2 = (entries, obs) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                },
                {
                    duration: 1500,
                    delay: 1500,
                    easing: 'ease',
                    fill: 'forwards'
                }
            )
            obs.unobserve(entry.target)
        }
    });
}

//관찰설정
const fadeObsever2 = new IntersectionObserver(animateFade2)

//관찰지시
const fadeElements2 = document.querySelectorAll('.smallJY')

fadeElements2.forEach((fadeElement) => {
    fadeObsever2.observe(fadeElement)
})


$(function () {
    //모바일 메뉴
    if (window.innerWidth <= 480) {
        $('#MainVisual').on("click", function () {
            $('.mobileBtn').css("opacity", "0")
            $('nav').css("right", "1%")
            $(".dim").css("display", "block")
            $(".dim").on("click", function () {
                $('nav').css("right", "-100%")
                $(".dim").css("display", "none")
                $(".mobileBtn").css("opacity", "1")
            })
        })
    } 
    $('.mobileBtn').on("click", function () {
        $('.mobileBtn').css("opacity", "0")
        $('nav').css("right", "1%")
        $(".dim").css("display", "block")
        $(".dim").on("click", function () {
            $('nav').css("right", "-100%")
            $(".dim").css("display", "none")
            $(".mobileBtn").css("opacity", "1")
        })
    })

    $('nav .snb li a').on("click", function () {

        /* nav 메뉴 active 상태표시*/
        $('nav .snb li').removeClass('on')
        this.parentNode.classList.add('on')

        //현재 section 변수설정
        const thisSection = $($(this).attr("href"))

        //Tap 클릭 후 구역 이동시 section 스크롤 초기화
        thisSection.scrollTop(0)

        //Tap 클릭경험 있을 경우 alertNav 없애기
        $('.alertText').fadeOut()

        /* alertText scrollDown #information */
        if ($('nav .snb li:nth-child(2)').hasClass("on")) {

            // scrollDown span 나타내기
            $('span.alertText.scrollDown').fadeIn()

            //scroll 감지
            thisSection.scroll(function () {
                //변수설정
                let scrT = thisSection.scrollTop();
                let sectionHeight = thisSection.height()
                let contentHeight = $(thisSection.children('div')).height();
                let scrollEnd = contentHeight - sectionHeight

                //스크롤 끝 감지 후 scrollDown fadeOut
                if (-1 <= scrT - scrollEnd <= 1) {
                    $('span.alertText.scrollDown').fadeOut()
                }
            })
        }

        /* alertText scrollDown #Menu */
        if ($('nav .snb li:nth-child(3)').hasClass("on")) {

            // scrollDown span 나타내기
            $('span.alertText.scrollDown').fadeIn()

            //scroll 감지
            thisSection.scroll(function () {
                //변수설정
                let scrT = thisSection.scrollTop();
                let sectionHeight = thisSection.height()
                let contentHeight = $(thisSection.children('div')).height();
                let scrollEnd = contentHeight - sectionHeight

                //스크롤 끝 감지 후 scrollDown fadeOut
                if (-1 <= scrT - scrollEnd <= 1) {
                    $('span.alertText.scrollDown').fadeOut()
                }
            })
        }
    })

    //#MainVisual animation
    //변수설정
    const line1 = $('.line1')
    const romance = $('.romance')
    const kjy = $('.kjy')
    const line2 = $('.line2')
    const bottomText = $('.bottomText')

    line1.fadeIn(1500);
    romance.delay(500).fadeIn(1500);
    kjy.delay(1000).fadeIn(1500);
    line2.delay(1500).fadeIn(1500);
    bottomText.delay(2000).fadeIn(1500);

}
);

