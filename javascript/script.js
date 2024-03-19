document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addMoreContent();
            }
        });
    }, {threshold: 1.0});

    function observeLastTvBox() {
        const lastTvBox = document.querySelector('.tv-box:last-of-type');
        if (lastTvBox) {
            observer.observe(lastTvBox);
        }
    }

    function addMoreContent() {
        const newTvBox = document.createElement('div');
        newTvBox.className = 'tv-box';
        newTvBox.innerHTML = '<a href="https://jakem1213.github.io/TheLibraryOfBabelFeed/" class="enter-text">ENTER</a>';
        document.body.appendChild(newTvBox);

        observer.disconnect();
        observeLastTvBox();
    } 

    observeLastTvBox();
});
