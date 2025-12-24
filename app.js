let tg = window.Telegram.WebApp;
tg.expand();

// Настройка основной кнопки
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#667eea";

// Элементы интерфейса
let selectedCategory = "";
let btnRings = document.getElementById("btnRings");
let btnPendants = document.getElementById("btnPendants");
let btnBracelets = document.getElementById("btnBracelets");
let btnRandom = document.getElementById("btnRandom");
let productDisplay = document.getElementById("productDisplay");

// Обработчики кнопок
btnRings.addEventListener("click", function() {
    selectedCategory = "rings";
    tg.MainButton.setText("Посмотреть кольца 💍");
    tg.MainButton.show();
    showCategoryInfo("Кольца 💍", "Идеальное украшение для любого случая");
});

btnPendants.addEventListener("click", function() {
    selectedCategory = "pendants";
    tg.MainButton.setText("Посмотреть подвески 📿");
    tg.MainButton.show();
    showCategoryInfo("Подвески 📿", "Элегантность в каждой детали");
});

btnBracelets.addEventListener("click", function() {
    selectedCategory = "bracelets";
    tg.MainButton.setText("Посмотреть браслеты 📿");
    tg.MainButton.show();
    showCategoryInfo("Браслеты 📿", "Стиль и комфорт");
});

// Функция отображения информации о категории
function showCategoryInfo(title, description) {
    productDisplay.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Нажмите на основную кнопку внизу для просмотра товаров</p>
    `;
}

// Обработчик нажатия основной кнопки
Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(JSON.stringify({
        category: selectedCategory,
        action: "view_products"
    }));
});

// Инициализация
tg.ready();