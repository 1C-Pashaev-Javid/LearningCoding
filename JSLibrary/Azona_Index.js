// Получение ссылки на Authentication сервис Firebase
const auth = firebase.auth();

// Обработчик успешного входа
function handleSignIn() {
    alert('Вы успешно вошли в систему!');
    // Здесь можно добавить переход на другую страницу игры
}

// Обработчик ошибки входа
function handleSignInError(error) {
    alert('Ошибка входа: ' + error.message);
}

// Обработчик успешной регистрации
function handleRegistrationSuccess() {
    alert('Регистрация успешна. Теперь вы можете войти в игру.');
    toggleForms();
}

// Обработчик ошибки регистрации
function handleRegistrationError(error) {
    alert('Ошибка регистрации: ' + error.message);
}

// Вход пользователя
function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;

    // Вход пользователя с использованием Email и Password
    auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            handleSignIn();
        })
        .catch((error) => {
            handleSignInError(error);
        });
}

// Регистрация нового пользователя
function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    // Регистрация нового пользователя с использованием Email и Password
    auth.createUserWithEmailAndPassword(username, password)
        .then((userCredential) => {
            handleRegistrationSuccess();
        })
        .catch((error) => {
            handleRegistrationError(error);
        });
}

// Переключение между формами
function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    
    // Очистка полей ввода
    document.getElementById('loginUsername').value = '';
    document.getElementById('loginPassword').value = '';
    document.getElementById('registerUsername').value = '';
    document.getElementById('registerPassword').value = '';

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
