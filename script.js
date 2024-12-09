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
    
    // Calculate how many units are needed to meet the target
    const targetUnits = (targetShare / 100) * totalShelfSpace;
    const unitsDifference = targetUnits - brandSpace;
    
    let resultText = `Current Share: ${currentShare.toFixed(2)}%<br>`;
    resultText += `Target Share: ${targetShare}%<br>`;
    resultText += `Difference from Target: ${difference.toFixed(2)}%<br>`;
    resultText += `Brand Space Difference: ${unitsDifference.toFixed(2)} units`;

    resultElement.innerHTML = resultText;
}
