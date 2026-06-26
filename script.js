// Примерни книги
const books = [
    { id: 1, title: "Престъпление и наказание", author: "Фьодор Достоевски", icon: "📕" },
    { id: 2, title: "1984", author: "Джордж Оруел", icon: "📗" },
    { id: 3, title: "Сто години самота", author: "Габриел Гарсия Маркес", icon: "📘" },
    { id: 4, title: "Под игото", author: "Иван Вазов", icon: "📙" },
    { id: 5, title: "Малкият принц", author: "Антоан дьо Сент-Екзюпери", icon: "📖" },
    { id: 6, title: "Да убиеш присмехулник", author: "Харпър Лий", icon: "📚" }
];

// Съдържание на книгите (примерно)
const bookContents = {
    1: "Глава 1... Беше прекрасен ден в Санкт Петербург...",
    2: "Глава 1... Часовникът удари тринадесет...",
    3: "Глава 1... Много години по-късно, пред разстрела...",
    4: "Глава 1... Бяха дълги и трудни години под турско робство...",
    5: "Глава 1... Веднъж, когато бях на шест години...",
    6: "Глава 1... Когато беше на тринадесет, брат ми Джим..."
};

// Зареждане на книгите в страницата
function loadBooks() {
    const grid = document.getElementById('bookGrid');
    grid.innerHTML = '';
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        card.innerHTML = `
            <span class="book-icon">${book.icon}</span>
            <div class="book-title">${book.title}</div>
            <div class="book-author">${book.author}</div>
        `;
        card.onclick = () => openReader(book.id);
        grid.appendChild(card);
    });
}

// Отваряне на четеца
function openReader(bookId) {
    const book = books.find(b => b.id === bookId);
    const content = bookContents[bookId] || 'Съдържанието на тази книга все още не е добавено...';
    
    document.getElementById('bookTitle').textContent = book.title;
    document.getElementById('readerContent').innerHTML = `<p>${content}</p>`;
    document.getElementById('reader').style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Запазваме коя книга е отворена
    window.currentBookId = bookId;
}

// Затваряне на четеца
document.getElementById('closeReader').addEventListener('click', () => {
    document.getElementById('reader').style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Управление на шрифта
let fontSize = 20;
document.getElementById('fontIncrease').addEventListener('click', () => {
    fontSize = Math.min(fontSize + 2, 36);
    document.querySelector('.reader-content').style.fontSize = fontSize + 'px';
});

document.getElementById('fontDecrease').addEventListener('click', () => {
    fontSize = Math.max(fontSize - 2, 12);
    document.querySelector('.reader-content').style.fontSize = fontSize + 'px';
});

// Зареждане на страницата
loadBooks();

// Бъдеща функционалност: вход, библиотека
document.getElementById('loginBtn').addEventListener('click', () => {
    alert('Функцията за вход ще бъде добавена скоро!');
});

document.getElementById('libraryBtn').addEventListener('click', () => {
    alert('Моята библиотека - тук ще се показват запазените книги!');
});