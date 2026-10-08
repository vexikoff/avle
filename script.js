const downButton = document.getElementById('contbutton');
const maxRotationX = -2.5;
const maxRotationY = -0.5;
const maxTranslation = 3;

downButton.addEventListener('mousemove', function(event) {
    const rect = downButton.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const percentX = (mouseX - centerX) / centerX;
    const percentY = (mouseY - centerY) / centerY;
    const rotateX = percentY * maxRotationX;
    const rotateY = percentX * maxRotationY;
    const translateX = percentX * maxTranslation;
    const translateY = percentY * maxTranslation;
    
    downButton.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0px)`;
});

downButton.addEventListener('mouseleave', function() {
    downButton.style.transform = 'rotateX(0deg) rotateY(0deg) translate3d(0px, 0px, 0px)';
});