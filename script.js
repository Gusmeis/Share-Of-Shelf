function calculateShare() {
    const totalShelfSpace = document.getElementById('totalShelfSpace').value;
    const brandSpace = document.getElementById('brandSpace').value;
    const targetShare = document.getElementById('targetShare').value;
    const resultElement = document.getElementById('result');

    if (totalShelfSpace <= 0 || brandSpace < 0 || targetShare < 0 || targetShare > 100) {
        resultElement.textContent = "Please enter valid numbers.";
        return;
    }

    const currentShare = (brandSpace / totalShelfSpace) * 100;
    const difference = currentShare - targetShare;
    
    let resultText = `Current Share: ${currentShare.toFixed(2)}%<br>`;
    resultText += `Target Share: ${targetShare}%<br>`;
    resultText += `Difference: ${difference.toFixed(2)}%`;

    resultElement.innerHTML = resultText;
}
