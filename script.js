// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.lesson-card');

    // Анимация появления карточек
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });

    // Счетчик уроков
    const categories = document.querySelectorAll('.lesson-category');
    let totalLessons = 0;

    categories.forEach(category => {
        const categoryCards = category.querySelectorAll('.lesson-card');
        totalLessons += categoryCards.length;
    });

    // Добавляем информацию о количестве уроков в header
    const header = document.querySelector('header');
    const lessonCount = document.createElement('p');
    lessonCount.textContent = `Всего уроков: ${totalLessons}`;
    lessonCount.style.color = '#ff0000';
    lessonCount.style.fontWeight = 'bold';
    lessonCount.style.marginTop = '10px';
    header.appendChild(lessonCount);

    // Эффект наведения на карточки
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });

        // Клик по карточке
        card.addEventListener('click', () => {
            const lessonTitle = card.querySelector('h3').textContent;
            console.log(`Урок выбран: ${lessonTitle}`);

            // Небольшой эффект при клике
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px) scale(1)';
            }, 100);
        });
    });

    // Плавная прокрутка к категориям
    const categoryTitles = document.querySelectorAll('.lesson-category h2');
    categoryTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', () => {
            title.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Добавляем эффект мерцания для заголовка
    const mainTitle = document.querySelector('header h1');
    setInterval(() => {
        mainTitle.style.textShadow = '0 0 30px rgba(255, 0, 0, 0.8)';
        setTimeout(() => {
            mainTitle.style.textShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
        }, 500);
    }, 3000);

    console.log('🚀 Сайт с уроками загружен!');
    console.log(`📚 Всего уроков: ${totalLessons}`);
});
// Словарь переводов для сайта
const translations = {
    ru: {
        title: "📚 Уроки веб-разработки",
        desc: "Полный курс от HTML до JavaScript",
        total_lessons: "Всего уроков:",
        html_sec: "HTML - Основы",
        css_sec: "CSS - Стилизация",
        footer: "© 2026 Уроки веб-разработки | Изучай и практикуйся",
        tag_basic: "Основы",
        tag_med: "Средний",
        tag_adv: "Продвинутый",
        l1_title: "Урок 1: Введение в HTML",
        l1_desc: "Что такое HTML? Структура HTML документа. Основные теги: html, head, body, title.",
        l2_title: "Урок 2: Текстовые элементы",
        l2_desc: "Работа с текстом: заголовки (h1-h6), параграфы (p), форматирование текста (strong, em, br, hr).",
        l3_title: "Урок 3: Ссылки и изображения",
        l3_desc: "Создание ссылок (a), атрибуты href и target. Вставка изображений (img), атрибуты src, alt, width, height.",
        l4_title: "Урок 4: Списки",
        l4_desc: "Маркированные списки (ul, li), нумерованные списки (ol, li), вложенные списки.",
        l5_title: "Урок 5: Таблицы",
        l5_desc: "Создание таблиц (table, tr, td, th), объединение ячеек (colspan, rowspan), стилизация таблиц.",
        l6_title: "Урок 6: Формы",
        l6_desc: "Создание форм (form, input, textarea, select, button), типы полей ввода, атрибуты форм.",
        l7_title: "Урок 7: Семантические теги",
        l7_desc: "Header, nav, main, section, article, aside, footer. Структурирование контента.",
        l8_title: "Урок 8: Введение в CSS",
        l8_desc: "Что такое CSS? Способы подключения CSS: inline, internal, external. Синтаксис CSS.",
        l9_title: "Урок 9: Селекторы",
        l9_desc: "Типы селекторов: по тегу, по классу, по id, универсальный селектор. Комбинированные селекторы.",
        l10_title: "Урок 10: Цвета и фон",
        l10_desc: "Color, background-color, background-image, background-size, background-position. Градиенты.",
        l11_title: "Урок 11: Шрифты и текст",
        l11_desc: "Font-family, font-size, font-weight, text-align, text-decoration, line-height, letter-spacing.",
        l12_title: "Урок 12: Box Model",
        l12_desc: "Модель блока: margin, padding, border, width, height. Box-sizing.",
        l13_title: "Урок 13: Display и Position",
        l13_desc: "Display: block, inline, inline-block, none. Position: static, relative, absolute, fixed, sticky.",
        l14_title: "Урок 14: Flexbox",
        l14_desc: "Flex-контейнер и flex-элементы. Justify-content, align-items, flex-direction, flex-wrap, gap.",
        l15_title: "Урок 15: Grid Layout",
        l15_desc: "Grid-контейнер, grid-template-columns, grid-template-rows, grid-gap, области сетки.",
        l16_title: "Урок 16: Анимации",
        l16_desc: "Transition, transform (rotate, scale, translate), animations, keyframes.",
        l17_title: "Урок 17: Адаптивный дизайн",
        l17_desc: "Media queries, viewport, мобильная адаптация, breakpoints."
    },
    uz: {
        title: "📚 Web-dasturlash darslari",
        desc: "HTML dan JavaScript gacha to'liq kurs",
        total_lessons: "Jami darslar:",
        html_sec: "HTML - Asoslari",
        css_sec: "CSS - Stil berish",
        footer: "© 2026 Web-dasturlash darslari | O'rgan va amaliyot qil",
        tag_basic: "Asoslari",
        tag_med: "O'rta",
        tag_adv: "Mukammal",
        l1_title: "1-dars: HTML ga kirish",
        l1_desc: "HTML nima? HTML hujjat tuzilishi. Asosiy teglar: html, head, body, title.",
        l2_title: "2-dars: Matn elementlari",
        l2_desc: "Matn bilan ishlash: sarlavhalar (h1-h6), paragraflar (p), matnni formatlash (strong, em, br, hr).",
        l3_title: "3-dars: Havolalar va rasmlar",
        l3_desc: "Havolalar yaratish (a), href va target atributlari. Rasmlar qo'shish (img), src, alt, width, height.",
        l4_title: "4-dars: Ro'yxatlar",
        l4_desc: "Belgilangan ro'yxatlar (ul, li), raqamlangan ro'yxatlar (ol, li), ichma-ich ro'yxatlar.",
        l5_title: "5-dars: Jadvallar",
        l5_desc: "Jadvallar yaratish (table, tr, td, th), kataklarni birlashtirish (colspan, rowspan), jadvallarni bezash.",
        l6_title: "6-dars: Formalar",
        l6_desc: "Formalar yaratish (form, input, textarea, select, button), kiritish maydonlari turlari, forma atributlari.",
        l7_title: "7-dars: Semantik teglar",
        l7_desc: "Header, nav, main, section, article, aside, footer. Kontentni tuzish.",
        l8_title: "8-dars: CSS ga kirish",
        l8_desc: "CSS nima? CSS ulanish usullari: inline, internal, external. CSS sintaksisi.",
        l9_title: "9-dars: Selektorlar",
        l9_desc: "Selektor turlari: teg, klass, id bo'yicha, universal selektor. Birlashtirilgan selektorlar.",
        l10_title: "10-dars: Ranglar va fon",
        l10_desc: "Color, background-color, background-image, background-size, background-position. Gradientlar.",
        l11_title: "11-dars: Shriftlar va matn",
        l11_desc: "Font-family, font-size, font-weight, text-align, text-decoration, line-height, letter-spacing.",
        l12_title: "12-dars: Box Model",
        l12_desc: "Blok modeli: margin, padding, border, width, height. Box-sizing.",
        l13_title: "13-dars: Display va Position",
        l13_desc: "Display: block, inline, inline-block, none. Position: static, relative, absolute, fixed, sticky.",
        l14_title: "14-dars: Flexbox",
        l14_desc: "Flex-konteyner va flex-elementlar. Justify-content, align-items, flex-direction, flex-wrap, gap.",
        l15_title: "15-dars: Grid Layout",
        l15_desc: "Grid-konteyner, grid-template-columns, grid-template-rows, grid-gap, to'r sohalari.",
        l16_title: "16-dars: Animatsiyalar",
        l16_desc: "Transition, transform (rotate, scale, translate), animations, keyframes.",
        l17_title: "17-dars: Moslashuvchan dizayn",
        l17_desc: "Media queries, viewport, mobil moslashuv, breakpoints."
    },
    en: {
        title: "📚 Web Development Lessons",
        desc: "Full course from HTML to JavaScript",
        total_lessons: "Total lessons:",
        html_sec: "HTML - Basics",
        css_sec: "CSS - Styling",
        footer: "© 2026 Web Development Lessons | Learn and Practice",
        tag_basic: "Basics",
        tag_med: "Intermediate",
        tag_adv: "Advanced",
        l1_title: "Lesson 1: Intro to HTML",
        l1_desc: "What is HTML? HTML document structure. Basic tags: html, head, body, title.",
        l2_title: "Lesson 2: Text Elements",
        l2_desc: "Working with text: headings (h1-h6), paragraphs (p), formatting (strong, em, br, hr).",
        l3_title: "Lesson 3: Links and Images",
        l3_desc: "Creating links (a), href and target. Inserting images (img), src, alt, width, height.",
        l4_title: "Lesson 4: Lists",
        l4_desc: "Bulleted lists (ul, li), numbered lists (ol, li), nested lists.",
        l5_title: "Lesson 5: Tables",
        l5_desc: "Creating tables (table, tr, td, th), merging cells (colspan, rowspan), styling.",
        l6_title: "Lesson 6: Forms",
        l6_desc: "Creating forms (form, input, textarea, select, button), input types, form attributes.",
        l7_title: "Lesson 7: Semantic Tags",
        l7_desc: "Header, nav, main, section, article, aside, footer. Content structuring.",
        l8_title: "Lesson 8: Intro to CSS",
        l8_desc: "What is CSS? Ways to include CSS: inline, internal, external. CSS syntax.",
        l9_title: "Lesson 9: Selectors",
        l9_desc: "Selector types: by tag, class, id, universal selector. Combinators.",
        l10_title: "Lesson 10: Colors and Background",
        l10_desc: "Color, background-color, background-image, background-size, background-position. Gradients.",
        l11_title: "Lesson 11: Fonts and Text",
        l11_desc: "Font-family, font-size, font-weight, text-align, text-decoration, line-height.",
        l12_title: "Lesson 12: Box Model",
        l12_desc: "Box model: margin, padding, border, width, height. Box-sizing.",
        l13_title: "Lesson 13: Display and Position",
        l13_desc: "Display: block, inline, inline-block, none. Position: static, relative, absolute, fixed, sticky.",
        l14_title: "Lesson 14: Flexbox",
        l14_desc: "Flex container and items. Justify-content, align-items, flex-direction, flex-wrap, gap.",
        l15_title: "Lesson 15: Grid Layout",
        l15_desc: "Grid container, grid-template-columns, grid-template-rows, grid-gap, grid areas.",
        l16_title: "Lesson 16: Animations",
        l16_desc: "Transition, transform (rotate, scale, translate), animations, keyframes.",
        l17_title: "Lesson 17: Responsive Design",
        l17_desc: "Media queries, viewport, mobile adaptation, breakpoints."
    }
};

// Функция переключения языка
function changeLang(lang) {
    // Сохраняем выбор в локальное хранилище
    localStorage.setItem('selectedLang', lang);

    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });

    // Обновляем весь текст с атрибутом data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Обновляем текст счетчика уроков (создается динамически)
    const lessonCountEl = document.getElementById('lesson-count-text');
    if (lessonCountEl) {
        const total = document.querySelectorAll('.lesson-card').length;
        lessonCountEl.textContent = `${translations[lang].total_lessons} ${total}`;
    }
}

// Анимация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.lesson-card');

    // Анимация появления карточек
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 50);
    });

    // Счетчик уроков
    const categories = document.querySelectorAll('.lesson-category');
    let totalLessons = 0;

    categories.forEach(category => {
        const categoryCards = category.querySelectorAll('.lesson-card');
        totalLessons += categoryCards.length;
    });

    // Добавляем информацию о количестве уроков в header
    const header = document.querySelector('header');
    const lessonCount = document.createElement('p');
    lessonCount.id = 'lesson-count-text'; // Добавил ID для перевода
    lessonCount.style.color = '#ff0000';
    lessonCount.style.fontWeight = 'bold';
    lessonCount.style.marginTop = '10px';
    header.appendChild(lessonCount);

    // Инициализация сохраненного языка при загрузке
    const savedLang = localStorage.getItem('selectedLang') || 'ru';
    changeLang(savedLang);

    // Эффект наведения на карточки
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });

        // Клик по карточке
        card.addEventListener('click', () => {
            const lessonTitle = card.querySelector('h3').textContent;
            console.log(`Урок выбран: ${lessonTitle}`);

            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = 'translateY(-5px) scale(1)';
            }, 100);
        });
    });

    // Плавная прокрутка к категориям
    const categoryTitles = document.querySelectorAll('.lesson-category h2');
    categoryTitles.forEach(title => {
        title.style.cursor = 'pointer';
        title.addEventListener('click', () => {
            title.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Добавляем эффект мерцания для заголовка
    const mainTitle = document.querySelector('header h1');
    setInterval(() => {
        mainTitle.style.textShadow = '0 0 30px rgba(255, 0, 0, 0.8)';
        setTimeout(() => {
            mainTitle.style.textShadow = '0 0 20px rgba(255, 0, 0, 0.5)';
        }, 500);
    }, 3000);

    console.log('🚀 Сайт с уроками загружен!');
    console.log(`📚 Всего уроков: ${totalLessons}`);
});