// Efeito de digitação + flutuação no nome
document.addEventListener("DOMContentLoaded", function() {
    const text = "Ricardo\u00A0Souza"; // Espaço não separável
    const typewriter = document.getElementById("typewriter");
    let i = 0;
    typewriter.innerHTML = "";
    function type() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 120);
        } else {
            setTimeout(floatEffect, 800);
        }
    }
    type();

    function floatEffect() {
        typewriter.innerHTML = "";
        for (let j = 0; j < text.length; j++) {
            const span = document.createElement("span");
            span.textContent = text[j];
            span.className = "holo-letter holo-float";
            // Espaço especial
            if (text[j] === "\u00A0") {
                span.classList.add("holo-space");
            }
            // Delay diferente para cada letra (efeito onda)
            span.style.animationDelay = `${j * 0.18}s`;
            typewriter.appendChild(span);
        }
    }
});

// Scroll suave entre seções
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animação de entrada ao rolar
function reveal() {
    document.querySelectorAll('.reveal').forEach(function(el) {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
}
window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// Formulário funcional
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Mensagem enviada! Obrigado pelo contato.");
        form.reset();
    });
}

// Fundo de partículas animadas
function createParticles(qtd = 30) {
    const container = document.getElementById('particles-bg');
    if (!container) return;
    for (let i = 0; i < qtd; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        // Estrelas menores: entre 10px e 20px
        const size = Math.random() * 10 + 10;
        p.style.width = p.style.height = `${size}px`;
        p.style.left = `${Math.random() * window.innerWidth}px`;
        p.style.top = `${Math.random() < 0.3 ? 0 : window.innerHeight - 32}px`;
        p.dataset.dx = (Math.random() - 0.5) * 2.5;
        p.dataset.dy = (Math.random() - 0.5) * 2.5;
        container.appendChild(p);
    }
}

function animateParticles() {
    document.querySelectorAll('.particle').forEach(p => {
        let x = parseFloat(p.style.left);
        let y = parseFloat(p.style.top);
        let dx = parseFloat(p.dataset.dx);
        let dy = parseFloat(p.dataset.dy);
        x += dx;
        y += dy;
        // Rebote nas bordas
        if (x < 0 || x > window.innerWidth - 32) p.dataset.dx *= -1;
        if (y < 0 || y > window.innerHeight - 32) p.dataset.dy *= -1;
        p.style.left = `${x}px`;
        p.style.top = `${y}px`;
    });
    requestAnimationFrame(animateParticles);
}
window.addEventListener('DOMContentLoaded', () => {
    createParticles(30);
    animateParticles();
});