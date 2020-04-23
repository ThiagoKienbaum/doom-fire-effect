const firePixelArray = [];
const fireWidth = 10;
const fireHeight = 10;

start()

function start() {
    createFireDataStructure();
    createFireSource();
    renderFire();
    setInterval(calculateFirePropagation, 1000);
};

function createFireDataStructure() {
    const numberOfPixels = fireWidth * fireHeight;

    for(let i = 0; i < numberOfPixels; i++) {
        firePixelArray[i] = 0;
    };
};

function createFireSource() {
    for(let column = 0; column <= fireWidth; column++) {
        const overwritePixelIndex = fireWidth * fireHeight;
        const pixelIndex = (overwritePixelIndex - fireWidth) + column;
        firePixelArray[pixelIndex] = 36;
    }
}

function renderFire() {
    let html = '<table cellpadding=0 cellspacing=0>';

    for(let row = 0; row < fireHeight; row++) {
        html += '<tr>';
        for(let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row);
            const fireIntensity = firePixelArray[pixelIndex];
            html += '<td>';
            html += `<div class="pixel-index">${pixelIndex}</div>`;
            html += fireIntensity
            html += '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.querySelector('#fireCanvas').innerHTML = html;
};

function calculateFirePropagation() {
    for(let column = 0; column < fireWidth; column++) {
        for(let row = 0; row < fireHeight; row++) {
            const pixelIndex = column + (fireWidth * row);
            updateFireIntensityPerPixel(pixelIndex);

        }
    }
};

function updateFireIntensityPerPixel(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fireWidth
}
