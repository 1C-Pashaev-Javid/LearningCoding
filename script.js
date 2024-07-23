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
        <p>Здесь вы можете найти наши программы.</p>
        <ul>
            <li>
                <h2>Программа 1</h2>
                <p>Описание программы 1.</p>
                <a href="#" class="cta-button">Скачать</a>
            </li>
            <li>
                <h2>Программа 2</h2>
                <p>Описание программы 2.</p>
                <a href="#" class="cta-button">Скачать</a>
            </li>
        </ul>
    `;
}

function showUseful() {
    const heroSection = document.getElementById('hero-section');
    heroSection.innerHTML = `
        <h1>Полезности</h1>
        <p>Здесь вы можете найти полезные элементы.</p>
        <ul>
            <li>
                <h2>Полезность 1</h2>
                <p>Описание полезности 1.</p>
                <a href="#" class="cta-button">Скачать</a>
            </li>
            <li>
                <h2>Полезность 2</h2>
                <p>Описание полезности 2.</p>
                <a href="#" class="cta-button">Скачать</a>
            </li>
        </ul>
    `;
}
