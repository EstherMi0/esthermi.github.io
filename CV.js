//BARRA HABILIDADES:

document.addEventListener("DOMContentLoaded", function() {
    let progressBars = document.querySelectorAll(".progress-bar");
    let progressSection = document.getElementById("habilidades");

    window.addEventListener("scroll", function() {
        let sectionPosition = progressSection.getBoundingClientRect();
        let windowHeight = window.innerHeight;

        if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
            progressBars.forEach(function(bar) {
                if (!bar.classList.contains("animate")) {
                    bar.style.setProperty("--fill-width", bar.getAttribute("data-percent"));
                    bar.classList.add("animate");
                }
            });
        }
    });
});

//SLIDER:

let currentIndex = 0;

function getVisibleItems() {
    return window.innerWidth <= 768 ? 1 : 3; // 1 elemento visible en móvil, 3 en escritorio
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    const visibleItems = getVisibleItems();

    currentIndex += n;

    // Asegurar que currentIndex no sobrepase los límites
    if (currentIndex > totalSlides - visibleItems) {
        currentIndex = totalSlides - visibleItems;
    }

    if (currentIndex < 0) {
        currentIndex = 0;
    }

    const newTransformValue = `translateX(${-currentIndex * 100 / visibleItems}%)`;
    document.querySelector('.slider-wrapper').style.transform = newTransformValue;
}

// Manejar los eventos de clic en los botones del slider
document.querySelectorAll('.modal-button').forEach((button, index) => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const imgSrc = document.querySelectorAll('.slider-item img')[index].src;
        document.getElementById('modal').style.display = 'block';
        document.getElementById('modal-img').src = imgSrc;
    });
});

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Inicializar el slider para mostrar las primeras fotos correctamente
moveSlide(0);

// Ajustar el slider al cambiar el tamaño de la pantalla
window.addEventListener('resize', () => {
    moveSlide(0);
});



// MENÚ MOVIL:

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', () => {
        header.classList.add('show');
        header.classList.remove('hide');
    });

    closeIcon.addEventListener('click', () => {
        header.classList.remove('show');
        header.classList.add('hide');
    });
});

// OCULTAR HEADER AL CLICK DE <a>:

document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const header = document.querySelector('header');
    const navLinks = document.querySelectorAll('header nav a');

    menuIcon.addEventListener('click', () => {
        header.classList.add('show');
        header.classList.remove('hide');
    });

    closeIcon.addEventListener('click', () => {
        header.classList.remove('show');
        header.classList.add('hide');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            header.classList.remove('show');
            header.classList.add('hide');
        });
    });
});



