async function createRain() {
    var rainContainer = document.getElementById('rain-container');
    var raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = Math.random() * window.innerWidth + 'px';
    raindrop.style.top = Math.random() * window.innerHeight + 'px';
    rainContainer.appendChild(raindrop);
}

function rain() {
    setInterval(createRain, 100);
}