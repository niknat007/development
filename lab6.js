
// Функція "Діалог з користувачем"
function dialogWithUser() {
    let age = prompt("Скільки вам років?");
    age = parseInt(age);

    if (isNaN(age)) {
        alert("Ви не ввели число.");
        return;
    }

    if (age < 18) {
        alert("На жаль, бронювання доступне лише з 18 років.");
        return;
    }

    alert("Вітаємо! Ви можете забронювати номер.");

    // цикл: демонстрація кількох варіантів
    for (let i = 1; i <= 3; i++) {
        alert(`Варіант ${i}: номер категорії ${i} ★`);
    }
}

// Автоматичний виклик при завантаженні
dialogWithUser();

