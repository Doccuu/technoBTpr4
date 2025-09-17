// Основной JavaScript файл с неоптимизированным кодом

// Глобальные переменные без оптимизации
var cart = [];
var isLoading = false;
var currentUser = null;
var products = [
    { id: 1, name: "Смартфон XTech Pro", price: 29990, image: "images/product1-large.jpg" },
    { id: 2, name: "Ноутбук GameBook Ultra", price: 89990, image: "images/product2-large.jpg" },
    { id: 3, name: "Наушники AudioMax", price: 12990, image: "images/product3-large.jpg" },
    { id: 4, name: "Планшет TabPro", price: 45990, image: "images/product4-large.jpg" },
    { id: 5, name: "Умные часы WatchSmart", price: 19990, image: "images/product5-large.jpg" },
    { id: 6, name: "Экшн-камера ActionPro", price: 24990, image: "images/product6-large.jpg" }
];
var header = document.querySelector('.header');

// Неэффективная загрузка DOM
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM загружен');
    initializeWebsite();
    setupEventListeners();
    loadUserData();
    checkCartStatus();
    updateProductPrices();
    initializeAnimations();
    setupScrollEffects();
    loadExternalResources();
});

// Неоптимизированная инициализация
function initializeWebsite() {
    console.log('Инициализация сайта...');

    // Множественные DOM запросы

    var navigation = document.querySelector('.navigation');
    var heroSection = document.querySelector('.hero-banner');
    var productsSection = document.querySelector('.products-section');
    var footer = document.querySelector('.footer');

    // Избыточная проверка элементов
    if (header && navigation && heroSection && productsSection && footer) {
        console.log('Все секции найдены');
        header.style.opacity = '1';
        navigation.style.opacity = '1';
        heroSection.style.opacity = '1';
        productsSection.style.opacity = '1';
        footer.style.opacity = '1';
    }

    // Ненужная задержка
    setTimeout(function () {
        console.log('Сайт готов к работе');
    }, 1000);
}

// Неэффективная настройка событий
function handleButtonClick(e) {
    console.log('Кнопка нажата: ', e.target.textContent);
    e.target.style.transform = 'scale(0.95)';
    setTimeout(() => {
        e.target.style.transform = 'scale(1)';
    }, 150);
}

function handleButtonMouseOver(e) {
    e.target.style.cursor = 'pointer';
}

function handleButtonMouseOut(e) {
    e.target.style.cursor = 'default';
}

function setupEventListeners() {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handlePageLoad);

    var buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleButtonClick);
        button.addEventListener('mouseover', handleButtonMouseOver);
        button.addEventListener('mouseout', handleButtonMouseOut);
    });
}

// Функция прокрутки к товарам
function scrollToProducts() {
    console.log('Прокрутка к товарам');

    // Неэффективная прокрутка
    var productsSection = document.getElementById('products');
    if (productsSection) {
        // Медленная анимированная прокрутка
        var currentPosition = window.pageYOffset;
        var targetPosition = productsSection.offsetTop - 100;
        var distance = targetPosition - currentPosition;
        var duration = 1500; // Слишком медленно
        var startTime = null;

        function animateScroll(timestamp) {
            if (startTime === null) startTime = timestamp;
            var progress = timestamp - startTime;
            var percentage = Math.min(progress / duration, 1);

            // Сложная функция easing
            var easing = 1 - Math.pow(1 - percentage, 4);
            window.scrollTo(0, currentPosition + (distance * easing));

            if (progress < duration) {
                requestAnimationFrame(animateScroll);
            }
        }

        requestAnimationFrame(animateScroll);
    }
}

// Неэффективное управление корзиной
var cartData = {
    items: [],
    total: 0,
    count: 0
};

function addToCart(productId) {
    console.log('Добавление товара в корзину: ' + productId);

    // Неэффективный поиск товара
    var product = null;
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            product = products[i];
            break;
        }
    }

    if (product) {
        // Проверка наличия в корзине
        var existingItem = null;
        for (var j = 0; j < cartData.items.length; j++) {
            if (cartData.items[j].id === productId) {
                existingItem = cartData.items[j];
                break;
            }
        }

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartData.items.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                image: product.image
            });
        }

        updateCartDisplay();
        showNotification('Товар добавлен в корзину!');

        // Избыточная анимация
        animateCartButton(productId);
    }
}

function updateCartDisplay() {
    // Пересчет общей суммы и количества
    cartData.total = 0;
    cartData.count = 0;

    for (var i = 0; i < cartData.items.length; i++) {
        cartData.total += cartData.items[i].price * cartData.items[i].quantity;
        cartData.count += cartData.items[i].quantity;
    }

    console.log('Обновление отображения корзины. Товаров: ' + cartData.count + ', Сумма: ' + cartData.total);
}

function animateCartButton(productId) {
    var buttons = document.querySelectorAll('.add-to-cart');
    for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].getAttribute('onclick').includes(productId)) {
            buttons[i].style.background = '#28a745';
            buttons[i].textContent = 'Добавлено!';

            setTimeout(function () {
                buttons[i].style.background = '';
                buttons[i].textContent = 'Добавить в корзину';
            }, 2000);

            break;
        }
    }
}

// Избыточные функции для обработки событий
function handleScroll() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Неэффективное изменение прозрачности хедера
    var header = document.querySelector('.header');
    if (header) {
        var opacity = Math.min(scrollTop / 100, 1);
        header.style.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
    }

    // Параллакс эффект для героя (ресурсозатратный)
    var hero = document.querySelector('.hero-image');
    if (hero) {
        hero.style.transform = 'translateY(' + (scrollTop * 0.5) + 'px)';
    }
}

function handleResize() {
    console.log('Изменение размера окна');
    // Неэффективная проверка размера
    var width = window.innerWidth;
    var height = window.innerHeight;

    if (width < 768) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
}

function handlePageLoad() {
    console.log('Страница полностью загружена');
    // Ненужные проверки после загрузки
    setTimeout(function () {
        checkAllImages();
        validateAllForms();
        preloadResources();
    }, 500);
}

function checkAllImages() {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        if (!images[i].complete) {
            console.log('Изображение не загружено: ' + images[i].src);
        }
    }
}

function validateAllForms() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
        console.log('Валидация формы: ' + i);
    }
}

function preloadResources() {
    // Избыточная предзагрузка
    var imagesToPreload = [
        'images/hero-banner-large.jpg',
        'images/product1-large.jpg',
        'images/product2-large.jpg',
        'images/product3-large.jpg'
    ];

    for (var i = 0; i < imagesToPreload.length; i++) {
        var img = new Image();
        img.src = imagesToPreload[i];
    }
}

// Показ уведомлений
function showNotification(message) {
    // Создание элемента уведомления
    var notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 9999;
        font-weight: bold;
        box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    // Анимация появления
    setTimeout(function () {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Автоматическое скрытие
    setTimeout(function () {
        notification.style.transform = 'translateX(100%)';
        setTimeout(function () {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Файл анимаций с избыточным кодом

// Неэффективная инициализация анимаций
function initializeAnimations() {
    console.log('Инициализация анимаций...');
    
    // Множественные обработчики для анимаций
    setupScrollAnimations();
    setupHoverAnimations();
    setupLoadAnimations();
    setupClickAnimations();
}

function setupScrollAnimations() {
    var animatedElements = document.querySelectorAll('[data-animation]');
    
    // Неоптимизированный скролл листенер
    window.addEventListener('scroll', function() {
        for (var i = 0; i < animatedElements.length; i++) {
            var element = animatedElements[i];
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                var animationType = element.getAttribute('data-animation');
                element.classList.add(animationType);
                
                // Дополнительные эффекты
                switch(animationType) {
                    case 'fadeIn':
                        element.style.opacity = '1';
                        element.style.transform = 'translateY(0)';
                        break;
                    case 'slideUp':
                        element.style.transform = 'translateY(0)';
                        element.style.opacity = '1';
                        break;
                    case 'zoomIn':
                        element.style.transform = 'scale(1)';
                        element.style.opacity = '1';
                        break;
                }
            }
        }
    });
}

function setupHoverAnimations() {
    // Избыточные hover эффекты для карточек
    var productCards = document.querySelectorAll('.product-card');
    
    for (var i = 0; i < productCards.length; i++) {
        productCards[i].addEventListener('mouseenter', function(e) {
            // Множественные DOM манипуляции
            e.target.style.transform = 'translateY(-10px) scale(1.02)';
            e.target.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            e.target.style.transition = 'all 0.4s ease';
            
            // Анимация для дочерних элементов
            var image = e.target.querySelector('.product-image');
            if (image) {
                image.style.transform = 'scale(1.1)';
            }
            
            var button = e.target.querySelector('.add-to-cart');
            if (button) {
                button.style.background = '#218838';
            }
        });
        
        productCards[i].addEventListener('mouseleave', function(e) {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            
            var image = e.target.querySelector('.product-image');
            if (image) {
                image.style.transform = 'scale(1)';
            }
            
            var button = e.target.querySelector('.add-to-cart');
            if (button) {
                button.style.background = '#28a745';
            }
        });
    }
}

function setupLoadAnimations() {
    // Анимации при загрузке страницы
    setTimeout(function() {
        var header = document.querySelector('.header');
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-50px)';
            header.style.transition = 'all 1s ease';
            
            setTimeout(function() {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }, 500);
        }
        
        var heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '0';
            heroContent.style.transform = 'scale(0.8)';
            heroContent.style.transition = 'all 1.2s ease';
            
            setTimeout(function() {
                heroContent.style.opacity = '1';
                heroContent.style.transform = 'scale(1)';
            }, 800);
        }
    }, 100);
}

function setupClickAnimations() {
    // Анимации кликов для всех кнопок
    var allButtons = document.querySelectorAll('button, .cta-button, .add-to-cart');
    
    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function(e) {
            // Создание эффекта пульсации
            var ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255,255,255,0.6);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
            `;
            
            var rect = e.target.getBoundingClientRect();
            var size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            
            e.target.style.position = 'relative';
            e.target.appendChild(ripple);
            
            setTimeout(function() {
                ripple.remove();
            }, 600);
        });
    }
    
    // Добавляем CSS для анимации пульсации
    var style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-animation {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Дополнительные анимационные функции
function animateCounter(element, start, end, duration) {
    var startTimestamp = null;
    var step = function(timestamp) {
        if (!startTimestamp) startTimestamp = timestamp;
        var progress = Math.min((timestamp - startTimestamp) / duration, 1);
        var current = Math.floor(progress * (end - start) + start);
        element.textContent = current;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function createFloatingElements() {
    // Создание декоративных плавающих элементов
    for (var i = 0; i < 10; i++) {
        var floatingElement = document.createElement('div');
        floatingElement.style.cssText = `
            position: fixed;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(0, 123, 255, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float-animation ${Math.random() * 10 + 5}s infinite linear;
        `;
        document.body.appendChild(floatingElement);
    }
    
    // CSS для плавающих элементов
    var floatStyle = document.createElement('style');
    floatStyle.textContent = `
        @keyframes float-animation {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: translateY(-100px) rotate(180deg);
                opacity: 0.5;
            }
            100% {
                transform: translateY(-200px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(floatStyle);
}

// Неиспользуемые анимационные функции
function oldSlideShow() {
    var images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    var current = 0;
    
    setInterval(function() {
        current = (current + 1) % images.length;
        console.log('Переключение на изображение: ' + images[current]);
    }, 3000);
}

function deprecatedParallax() {
    window.addEventListener('scroll', function() {
        var scrolled = window.pageYOffset;
        var parallaxElements = document.querySelectorAll('.parallax');
        
        for (var i = 0; i < parallaxElements.length; i++) {
            var speed = parallaxElements[i].dataset.speed || 0.5;
            parallaxElements[i].style.transform = 'translateY(' + (scrolled * speed) + 'px)';
        }
    });
}

// Управление корзиной с избыточным кодом

var cartInstance = {
    items: [],
    total: 0,
    count: 0,
    isVisible: false,
    element: null
};

function initializeCart() {
    console.log('Инициализация корзины...');
    createCartElement();
    loadCartFromStorage();
    updateCartCounter();
    setupCartEvents();
}

function createCartElement() {
    // Создание элемента корзины в DOM
    var cartHTML = `
        <div id="shopping-cart" class="cart-sidebar">
            <div class="cart-header">
                <h3>Корзина покупок</h3>
                <button class="close-cart" onclick="closeCart()">&times;</button>
            </div>
            <div class="cart-items-list"></div>
            <div class="cart-footer">
                <div class="cart-total">
                    <strong>Итого: <span id="cart-total-amount">0</span> ₽</strong>
                </div>
                <button class="checkout-btn" onclick="proceedToCheckout()">Оформить заказ</button>
            </div>
        </div>
        <div class="cart-overlay" onclick="closeCart()"></div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', cartHTML);
    cartInstance.element = document.getElementById('shopping-cart');
    
    // CSS для корзины
    var cartStyles = document.createElement('style');
    cartStyles.textContent = `
        .cart-sidebar {
            position: fixed;
            right: -400px;
            top: 0;
            width: 400px;
            height: 100vh;
            background: white;
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            z-index: 9999;
            transition: right 0.3s ease;
            display: flex;
            flex-direction: column;
        }
        
        .cart-sidebar.active {
            right: 0;
        }
        
        .cart-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,0.5);
            z-index: 9998;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .cart-overlay.active {
            opacity: 1;
            visibility: visible;
        }
        
        .cart-header {
            padding: 20px;
            border-bottom: 1px solid #eee;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .close-cart {
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        .cart-items-list {
            flex: 1;
            overflow-y: auto;
            padding: 20px;
        }
        
        .cart-footer {
            padding: 20px;
            border-top: 1px solid #eee;
        }
        
        .checkout-btn {
            width: 100%;
            padding: 15px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 10px;
        }
    `;
    document.head.appendChild(cartStyles);
}

function addItemToCart(productId) {
    console.log('Добавление товара в корзину: ' + productId);
    
    // Поиск товара
    var product = findProductById(productId);
    if (!product) {
        console.error('Товар не найден');
        return;
    }
    
    // Проверка существования в корзине
    var existingItem = findCartItem(productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
        console.log('Увеличено количество товара: ' + product.name);
    } else {
        cartInstance.items.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
            image: product.image
        });
        console.log('Новый товар добавлен: ' + product.name);
    }
    
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification('Товар добавлен в корзину!');
    animateCartIcon();
}

function removeItemFromCart(productId) {
    var itemIndex = -1;
    
    for (var i = 0; i < cartInstance.items.length; i++) {
        if (cartInstance.items[i].id === productId) {
            itemIndex = i;
            break;
        }
    }
    
    if (itemIndex > -1) {
        var removedItem = cartInstance.items.splice(itemIndex, 1)[0];
        console.log('Товар удален из корзины: ' + removedItem.name);
        updateCartDisplay();
        saveCartToStorage();
        showCartNotification('Товар удален из корзины');
    }
}

function updateItemQuantity(productId, newQuantity) {
    var item = findCartItem(productId);
    
    if (item) {
        if (newQuantity <= 0) {
            removeItemFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartDisplay();
            saveCartToStorage();
        }
    }
}

function findProductById(productId) {
    // Неэффективный поиск в глобальном массиве
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            return products[i];
        }
    }
    return null;
}

function findCartItem(productId) {
    for (var i = 0; i < cartInstance.items.length; i++) {
        if (cartInstance.items[i].id === productId) {
            return cartInstance.items[i];
        }
    }
    return null;
}

function updateCartDisplay() {
    updateCartCounter();
    updateCartTotal();
    renderCartItems();
}

function updateCartCounter() {
    cartInstance.count = 0;
    for (var i = 0; i < cartInstance.items.length; i++) {
        cartInstance.count += cartInstance.items[i].quantity;
    }
    
    // Обновление счетчика в UI (если есть)
    var counter = document.querySelector('.cart-counter');
    if (counter) {
        counter.textContent = cartInstance.count;
        counter.style.display = cartInstance.count > 0 ? 'block' : 'none';
    }
}

function updateCartTotal() {
    cartInstance.total = 0;
    for (var i = 0; i < cartInstance.items.length; i++) {
        cartInstance.total += cartInstance.items[i].price * cartInstance.items[i].quantity;
    }
    
    var totalElement = document.getElementById('cart-total-amount');
    if (totalElement) {
        totalElement.textContent = formatPrice(cartInstance.total);
    }
}

function renderCartItems() {
    var itemsList = document.querySelector('.cart-items-list');
    if (!itemsList) return;
    
    if (cartInstance.items.length === 0) {
        itemsList.innerHTML = '<p>Корзина пуста</p>';
        return;
    }
    
    var html = '';
    for (var i = 0; i < cartInstance.items.length; i++) {
        var item = cartInstance.items[i];
        html += `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p class="cart-item-price">${formatPrice(item.price)} ₽</p>
                    <div class="quantity-controls">
                        <button onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="removeItemFromCart(${item.id})">×</button>
            </div>
        `;
    }
    
    itemsList.innerHTML = html;
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function showCart() {
    cartInstance.element.classList.add('active');
    document.querySelector('.cart-overlay').classList.add('active');
    cartInstance.isVisible = true;
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartInstance.element.classList.remove('active');
    document.querySelector('.cart-overlay').classList.remove('active');
    cartInstance.isVisible = false;
    document.body.style.overflow = '';
}

function clearCart() {
    cartInstance.items = [];
    cartInstance.total = 0;
    cartInstance.count = 0;
    updateCartDisplay();
    saveCartToStorage();
    showCartNotification('Корзина очищена');
}

function saveCartToStorage() {
    try {
        localStorage.setItem('shopping-cart', JSON.stringify(cartInstance.items));
    } catch (e) {
        console.error('Ошибка сохранения корзины:', e);
    }
}

function loadCartFromStorage() {
    try {
        var savedCart = localStorage.getItem('shopping-cart');
        if (savedCart) {
            cartInstance.items = JSON.parse(savedCart);
            updateCartDisplay();
        }
    } catch (e) {
        console.error('Ошибка загрузки корзины:', e);
    }
}

function setupCartEvents() {
    // Обработчики событий для корзины
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && cartInstance.isVisible) {
            closeCart();
        }
    });
}

function animateCartIcon() {
    var cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        cartIcon.style.transition = 'transform 0.2s ease';
        
        setTimeout(function() {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
}

function showCartNotification(message) {
    // Переиспользуем функцию из main.js
    if (typeof showNotification === 'function') {
        showNotification(message);
    }
}

function proceedToCheckout() {
    if (cartInstance.items.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    
    alert('Переход к оформлению заказа...' + 
          'Товаров в корзине: ' + cartInstance.count + '' +
          'Общая сумма: ' + formatPrice(cartInstance.total) + ' ₽');
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initializeCart, 1000);
});