function getUserData() {
    // Получение данных пользователей из localStorage
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : {};
}

function saveUserData(users) {
    // Сохранение данных пользователей в localStorage
    localStorage.setItem('users', JSON.stringify(users));
}

function login() {
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const users = getUserData();

    if (users[username] && users[username] === password) {
        alert('Вы успешно вошли в систему!');
        // Здесь можно добавить переход на другую страницу игры
    } else {
        alert('Неправильный логин или пароль.');
    }
}

function register() {
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const users = getUserData();

    if (users[username]) {
        alert('Пользователь с таким именем уже существует.');
        return;
    }

    users[username] = password;
    saveUserData(users);
    alert('Регистрация успешна. Теперь вы можете войти в игру.');
    toggleForms();
}

function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }
}
