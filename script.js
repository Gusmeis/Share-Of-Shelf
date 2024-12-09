function calculateShare() {
    const totalShelfSpace = document.getElementById('totalShelfSpace').value;
    const brandSpace = document.getElementById('brandSpace').value;
    const resultElement = document.getElementById('result');

    if (totalShelfSpace <= 0 || brandSpace < 0) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const share = (brandSpace / totalShelfSpace) * 100;
    resultElement.textContent = `Shelf Share: ${share.toFixed(2)}%`;
}