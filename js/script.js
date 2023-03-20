let menuMobile = document.getElementById('mobile');
document.querySelector(' div.contMenu_itemsMobile > i').addEventListener('click', () => {   
    if(menuMobile.classList.contains('show')){
        menuMobile.classList.remove('show');
        menuMobile.classList.add('hide');
    } else {
        menuMobile.classList.remove('hide');
        menuMobile.classList.add('show');
    }     
    
})
$('.depCont').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }],
});
