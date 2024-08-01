document.addEventListener("DOMContentLoaded", function() {
    const petals = document.querySelectorAll('.petal');
    petals.forEach((petal, index) => {
        petal.style.animation = `bloom 2s ease-in-out ${index * 0.5}s infinite`;
    });
});

@keyframes bloom {
    0%, 100% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1.2);
    }
}
