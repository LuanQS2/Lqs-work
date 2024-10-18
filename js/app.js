// --------- Primeiro Carrossel ---------

const dots = document.querySelectorAll('.dot'); 
const carouselContent = document.querySelector('.carousel-content'); 

let currentIndex = 0; 


function showCarouselPage(index) {
    const offset = -index * 100;
    carouselContent.style.transform = `translateX(${offset}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % dots.length; 
    showCarouselPage(currentIndex);
}


dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showCarouselPage(currentIndex);
    });
});


setInterval(nextSlide, 5000); 

// --------- Segundo Carrossel ---------

const dots2 = document.querySelectorAll('.dot2'); 
const carouselContent2 = document.querySelector('.carousel-content2'); 

let currentIndex2 = 0; // Índice do segundo carrossel


function showCarouselPage2(index) {
    const offset = -index * 100;
    carouselContent2.style.transform = `translateX(${offset}%)`;

    dots2.forEach(dot => dot.classList.remove('active'));
    dots2[index].classList.add('active');
}

function nextSlide2() {
    currentIndex2 = (currentIndex2 + 1) % dots2.length; 
    showCarouselPage2(currentIndex2);
}


dots2.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex2 = index;
        showCarouselPage2(currentIndex2);
    });
});


setInterval(nextSlide2, 5000); 

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const faqItem = toggle.parentElement; // Pega o elemento pai .faq-item
        const content = toggle.nextElementSibling;

        if (content.style.display === 'block') {
            content.style.display = 'none';
            toggle.textContent = '+';
            faqItem.classList.remove('active'); // Remove a classe 'active' para voltar à cor padrão
        } else {
            content.style.display = 'block';
            toggle.textContent = '-';
            faqItem.classList.add('active'); // Adiciona a classe 'active' para mudar a cor
        }
    });
});

