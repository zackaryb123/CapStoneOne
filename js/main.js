﻿function onNavButton() {
    let currentPage = $('.page').find('section:visible');
    $('.nav-link').on('click', function (event) {
        const targetPage = $(this).attr('id');
        switch (targetPage) {
            case 'v-pills-profile-tab':
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', true);
                $('.profile-page').attr( 'hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-games-tab':
                $('.navbar-brand').text('GAMES');
                $(currentPage).attr( 'hidden', true);
                $('.top-nav').attr('hidden', false);
                $('.games-page').attr('hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
            case 'v-pills-store-tab':
                $('.navbar-brand').text('STORE')
                $(currentPage).attr('hidden', true);
                $('.top-nav').attr('hidden', false);
                $('.store-page').attr('hidden', false);
                currentPage = $('.page').find('section:visible');
                break;
        }
    });
}

function HandleMainEvents() {
    onNavButton();
}
$(HandleMainEvents);