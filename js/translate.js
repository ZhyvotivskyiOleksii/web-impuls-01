// Объект с переводами для разных языков
const translations = {
    "en": {
        "title": "En",
        "services": "Services",
        "prices": "Prices",
        "reviews": "Reviews",
        "contact": "Contact",
        "promotions": "Promotions",
        "logo": "./svg/logo-en.svg",
        "heroSubtitle1": "Creating design, developing turnkey websites with promotion in Google to top positions",
        "heroSubtitle2": "By contacting our web studio, you will get the best result at an affordable price for your business.",
        "orderButton": "Order a website",
        "clientsCount": "200+",
        "satisfiedClients": "Satisfied clients"
    },
    "pl": {
        "title": "Pl",
        "services": "Usługi",
        "prices": "Ceny",
        "reviews": "Opinię",
        "contact": "Kontakt",
        "promotions": "Promocje",
        "logo": "./svg/logo-pl.svg",
        "heroSubtitle1": "Tworzenie projektów, rozwój stron internetowych pod klucz z promocją w Google do najwyższych pozycji",
        "heroSubtitle2": "Kontaktując się z naszym studiem internetowym, uzyskasz najlepszy wynik w przystępnej cenie dla Twojej firmy.",
        "orderButton": "Zamów stronę internetową",
        "clientsCount": "200+",
        "satisfiedClients": "Zadowoleni klienci"
    },
    "uk": {
        "title": "Uk",
        "services": "Послуги",
        "prices": "Ціни",
        "reviews": "Відгуки",
        "contact": "Контакт",
        "promotions": "Акції",
        "logo": "./svg/logo-modal.svg",
        "heroSubtitle1": "Створення дизайну, розробка сайту під ключ з просуванням його в Google до топових позицій",
        "heroSubtitle2": "Звертаючись до нашої веб-студії ви отримаєте максимальний результат за доступною ціною для вашого бізнесу.",
        "orderButton": "Замовити сайт",
        "clientsCount": "200+",
        "satisfiedClients": "Задоволених клієнтів"
    }
};

// Функция для определения языка системы пользователя
function getUserLanguage() {
    return navigator.language || navigator.userLanguage;
}

// Функция для установки языка
function setLanguage(language) {
    const lang = translations[language] ? language : 'en'; // Используем английский по умолчанию

    document.getElementById('titleHeader').innerText = translations[lang].title;
    document.getElementById('titleMobile').innerText = translations[lang].title;

    // Обновляем текстовые элементы меню и другие элементы
    document.querySelectorAll('[data-translate-key]').forEach(element => {
        const key = element.getAttribute('data-translate-key');
        element.innerText = translations[lang][key];
    });

    // Обновляем логотипы
    document.getElementById('logoHeader').src = translations[lang].logo;
    document.getElementById('logoMobile').src = translations[lang].logo;

    // Обновляем URL
    const currentUrl = new URL(window.location);
    currentUrl.searchParams.set('lang', lang);
    window.history.pushState({}, '', currentUrl);
}

// Определяем язык пользователя и устанавливаем соответствующий язык на сайте при загрузке
function initializeLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const langFromUrl = urlParams.get('lang');

    if (langFromUrl && translations[langFromUrl]) {
        setLanguage(langFromUrl);
    } else {
        const userLanguage = getUserLanguage().substring(0, 2); // Получаем первые 2 символа языка
        setLanguage(userLanguage);
    }
}

// Добавляем обработчики событий для кнопок смены языка
document.querySelectorAll('#languageButtonHeader, #languageButtonMobile').forEach(button => {
    button.addEventListener('click', function() {
        const menuId = this.id === 'languageButtonHeader' ? 'languageMenuHeader' : 'languageMenuMobile';
        document.getElementById(menuId).classList.toggle('show');
    });
});

// Добавляем обработчик событий для выбора языка
document.querySelectorAll('.language-menu a').forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
        document.getElementById('languageMenuHeader').classList.remove('show');
        document.getElementById('languageMenuMobile').classList.remove('show');
    });
});

// Закрываем меню, если пользователь кликает вне его
window.onclick = function(event) {
    if (!event.target.matches('#languageButtonHeader') && !event.target.matches('#languageButtonMobile') &&
        !event.target.matches('#languageButtonHeader img') && !event.target.matches('#languageButtonMobile img')) {
        const dropdowns = document.getElementsByClassName("language-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Инициализируем язык при загрузке страницы
initializeLanguage();
