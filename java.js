// =======================
// 1. Hamburger Menu Logic
// =======================

const burger = document.querySelector('.burger');
const headerLinks = document.querySelectorAll('header a');

if (burger) {
    burger.addEventListener('click', () => {
        document.body.classList.toggle('menu-open');
        headerLinks.forEach(link => link.classList.toggle('show'));
    });
}


// ========================================
// 2. matchMedia() — мобильді және десктоп
// ========================================

const mobileQuery = window.matchMedia('(max-width: 768px)');

function handleLayoutChange(e) {
    if (e.matches) {
        document.body.classList.add('mobile-layout');
    } else {
        document.body.classList.remove('mobile-layout');
        headerLinks.forEach(link => link.classList.remove('show'));
    }
}

mobileQuery.addEventListener('change', handleLayoutChange);
handleLayoutChange(mobileQuery);


// ================================
// 3. window.innerWidth — өлшем алу
// ================================

function checkViewport() {
    if (window.innerWidth < 600) {
        console.log("📱 Mobile screen detected");
    } else {
        console.log("🖥 Desktop screen detected");
    }
}
checkViewport();


// ====================================================
// 4. getBoundingClientRect() — карточкаларды анимациялау
// ====================================================

const cards = document.querySelectorAll('.card');

function animateCards() {
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', animateCards);
animateCards();


// ===================================================
// 5. ResizeObserver — контейнер өлшемін бақылау
// ===================================================

const hero = document.querySelector('#Hero');

if (hero && window.ResizeObserver) {
    const observer = new ResizeObserver(entries => {
        for (let entry of entries) {
            if (entry.contentRect.height < 300) {
                hero.classList.add('compact');
            } else {
                hero.classList.remove('compact');
            }
        }
    });

    observer.observe(hero);
}


// =====================================
// 6. Feature Detection (fetch support)
// =====================================

if (window.fetch) {
    console.log("Fetch supported ✔");
} else {
    console.log("Fetch NOT supported ❌ — using fallback...");
    function oldXHR() {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/data");
        xhr.onload = () => console.log("Legacy XHR loaded");
        xhr.send();
    }
    oldXHR();
}


// ==============================
// 7. Polyfill (example for includes)
// ==============================

if (!Array.prototype.includes) {
    Array.prototype.includes = function (search) {
        return this.indexOf(search) !== -1;
    };
    console.log("Polyfill loaded for includes()");
}


// ====================================
// 8. Progressive Enhancement Principle
// ====================================

// Егер JavaScript өшсе — барлық меню жұмыс істейді
document.body.classList.add('js-enabled');
