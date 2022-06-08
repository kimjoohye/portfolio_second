let curPos = 0; //처음에는 0번 인덱스부터 보고 있음

function init(){
    new WOW().init();
}

function pager(num){
        $('button').removeAttr('disabled')
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        document.querySelectorAll('.page')[curPos].classList.toggle('active-page')
        $('.item').hide()
        curPos = num;
        document.querySelectorAll('.item')[curPos].classList.toggle('active')
        document.querySelectorAll('.page')[curPos].classList.toggle('active-page')
        $('.active').show()

 }

function goProject(num){
    var url = ["https://kimjoohye.github.io/mbtiTestApp/", "https://kimjoohye.github.io/book-cardapp/", "https://clonecoding-subway.netlify.app/"];
    location.href = url[num];
}

$(document).ready(function(){
    init();

    const swiper = new Swiper('.swiper-container', {
        direction : 'horizontal',
        slidesPerView : 1,
        spaceBetween: 0,
        loop : false,
        speed : 1000,
        pagination : {
            el : '.swiper-pagination',
            type: 'bullets',
            clickable : true,
        },
        navigation : {
            nextEl : '.swiper-button-next',
            prevEl : '.swiper-button-prev',
        },
        centeredSlides: true
    });

    const toggleBtn = document.querySelector('.navbar-toggleBtn');
    const menu = document.querySelector('.nav-bar');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    
})