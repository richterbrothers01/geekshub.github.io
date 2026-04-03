// Custom Cursor Logic
const cursor = document.querySelector('.custom-cursor');
const interactiveElements = document.querySelectorAll('a, button');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Shopping Cart Logic
let cartItems = 0;
const cartCountElement = document.getElementById('cartCount');

function addToCart() {
    cartItems++;
    cartCountElement.innerText = cartItems;
    
    // Add a satisfying pop animation to the cart
    cartCountElement.style.transform = 'scale(1.5)';
    setTimeout(() => {
        cartCountElement.style.transform = 'scale(1)';
    }, 200);
}

// Scroll reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(50px)';
    el.style.transition = `all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${index * 0.15}s`;
    observer.observe(el);
});
