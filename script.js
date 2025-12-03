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
            if (text[j] === "\u00A0") {
                span.classList.add("holo-space");
            }
            span.style.animationDelay = `${j * 0.18}s`;
            typewriter.appendChild(span);
        }
    }
});


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});


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


const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        
        const whatsappNumber = "5511971430217"; 
        
        
        const fullMessage = `Olá! Meu nome é ${name}. ${message}`;
        
        
        const encodedMessage = encodeURIComponent(fullMessage);
        
        
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        
        form.reset();
    });
}


function createParticles(qtd = 30) {
    const container = document.getElementById('particles-bg');
    if (!container) return;
    for (let i = 0; i < qtd; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
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