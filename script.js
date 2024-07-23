document.addEventListener('DOMContentLoaded', () => {
    showHome();
});

function showHome() {
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <h1>Добро пожаловать!</h1>
        <p>Это стартовый экран вашего сайта.</p>
        <a href="#" class="cta-button">Начать</a>
    `;
}

function showPrograms() {
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <h1>Программы</h1>
        <div class="app-item">
            <img src="app1.png" alt="Программа 1" class="app-icon">
            <div class="app-details">
                <h2>Программа 1</h2>
                <p>Описание программы 1. Эта программа поможет вам...</p>
                <a href="#" class="download-button">Скачать</a>
            </div>
        </div>
        <div class="app-item">
            <img src="app2.png" alt="Программа 2" class="app-icon">
            <div class="app-details">
                <h2>Программа 2</h2>
                <p>Описание программы 2. С помощью этой программы вы сможете...</p>
                <a href="#" class="download-button">Скачать</a>
            </div>
        </div>
    `;
}

function showUseful() {
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <h1>Полезности</h1>
        <div class="useful-item">
            <img src="useful1.png" alt="Полезность 1" class="useful-icon">
            <div class="useful-details">
                <h2>Полезность 1</h2>
                <p>Описание полезности 1. Это может быть полезно для...</p>
                <a href="#" class="download-button">Скачать</a>
            </div>
        </div>
        <div class="useful-item">
            <img src="useful2.png" alt="Полезность 2" class="useful-icon">
            <div class="useful-details">
                <h2>Полезность 2</h2>
                <p>Описание полезности 2. Используйте это, чтобы...</p>
                <a href="#" class="download-button">Скачать</a>
            </div>
        </div>
    `;
}
