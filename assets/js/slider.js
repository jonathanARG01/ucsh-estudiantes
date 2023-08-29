$(document).ready(function() {
    
    
    const swiper_home = new Swiper('.swiper-home', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        }
    });


    const swiper_oferta = new Swiper(".swiper_oferta", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false
    });

    
    const swiper_oferta_thumbs = new Swiper(".swiper_oferta_thumbs", {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_oferta,
        }
    });



    const swiper_notas = new Swiper(".swiper_notas", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false
    });

    const swiper_notas_thumbs = new Swiper(".swiper_notas_thumbs", {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_notas,
        }
    });



    const swiper_historico = new Swiper(".swiper_historico", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false
    });

    const swiper_historico_thumbs = new Swiper(".swiper_historico_thumbs", {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_historico,
        }
    });


    const swiper_casino = new Swiper(".swiper_casino", {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: false
    });

    const swiper_casino_thumbs = new Swiper(".swiper_casino_thumbs", {
        spaceBetween: 10,
        loop: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper_casino,
        }
    });



    $("#show").click(function() {
        var passwordInput = $("#inputPass");
        var passwordFieldType = passwordInput.attr("type");

        if (passwordFieldType === "password") {
            passwordInput.attr("type", "text");
        } else {
            passwordInput.attr("type", "password");
        }
    });


});
