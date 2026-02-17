// Плавный скролл для якорных ссылок (если добавятся в будущем)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Простое приветствие в консоли (для разработчиков)
console.log('StudentShare Landing Page v1.0. Сайт работает!');
