import Swiper, { Pagination } from 'swiper';

new Swiper('.slider', {
    autoHeight: true,
    modules: [Pagination],
    pagination: {
        el: '.pagination',
        clickable: true,

        renderBullet: (index, className) =>
            `<button type="button" class="pagination__button ${className}"></button>`,
    },
});