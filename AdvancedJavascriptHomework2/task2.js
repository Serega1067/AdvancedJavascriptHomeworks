/**
 * Задание 2.
Вы разрабатываете систему отзывов для вашего веб-сайта.
Пользователи могут оставлять отзывы, но чтобы исключить слишком
короткие или слишком длинные сообщения, вы решаете установить
некоторые ограничения.

Создайте HTML-структуру с текстовым полем для ввода отзыва,
кнопкой для отправки и контейнером, где будут отображаться отзывы.

Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
Однако если длина введенного отзыва менее 50 или более 500 символов,
функция должна генерировать исключение.

При добавлении отзыва, он должен отображаться на странице под
предыдущими отзывами, а не заменять их.
 */

const initialData = [
    {
        id: 'apple',
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        id: 'samsung',
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        id: 'sony',
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

initialData.forEach((review) => {
    let userReview = render(review);
    news.insertAdjacentHTML('beforeend', userReview);
});

function render(review) {
    return `<div class="news__item">
    <h2 class="news__item_heading">${review.product}</h2>
    <p class="news__item_text">${review.reviews[0].text}</p>
    <textarea class="news__item_textarea" cols="20" rows="2"></textarea><br>
    <button id="${review.id}" class="load" data-id="load">Добавить отзыв</button></div>`;
};
const addButtons = document.querySelectorAll('[data-id="load"]');
const lastReview = document.querySelector('.news__item_text');


addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'apple' ||
            e.target.id === 'sony' ||
            e.target.id === 'samsung'
        ) {
            newReviewRender(e);
        }

    })
})

function newReviewRender(e) {
    try {
        const textArea = e.target.closest('div').querySelector('.news__item_textarea');
        if (textArea.value.length < 5) throw new Error(
            'Слишком короткий текст');
        if (textArea.value.length > 500) throw new Error(
            'Слишком длинный текст');
        const userNewReview = e.target.closest('div');
        const p = document.createElement('p');
        p.textContent = textArea.value;
        p.classList.add('new-new');
        userNewReview.insertBefore(p, textArea);
        textArea.value = '';
    } catch (e) {
        alert(e);
    }

}
