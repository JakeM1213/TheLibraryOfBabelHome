document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addMoreContent();
            }
        });
    }, {threshold: 1.0});

    
    const lastTvBox = document.querySelector('.tv-box:last-of-type');
    if (lastTvBox) {
        observer.observe(lastTvBox);
    }

    function addMoreContent() {
        const newTvBox = document.createElement('div');
        newTvBox.className = 'tv-box';
        newTvBox.innerHTML = '<span class="enter-text">ENTER</span>';
        document.body.appendChild(newTvBox);

       
        observer.unobserve(lastTvBox);
        observer.observe(newTvBox);
    }
});
