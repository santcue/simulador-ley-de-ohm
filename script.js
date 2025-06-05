document.addEventListener('DOMContentLoaded', () => {
    const voltajeSlider = document.getElementById('voltaje');
    const resistenciaSlider = document.getElementById('resistencia');
    const voltajeLabel = document.getElementById('voltajeLabel');
    const resistenciaLabel = document.getElementById('resistenciaLabel');
    const corrienteOutput = document.getElementById('corriente');

    const vText = document.querySelector('.v');
    const iText = document.querySelector('.i');
    const rText = document.querySelector('.r');

    const resetBtn = document.getElementById('resetBtn');

    function actualizarValores() {
        const V = parseFloat(voltajeSlider.value);
        const R = parseFloat(resistenciaSlider.value);
        const I = V / R; // Corriente en amperios
        const I_mA = I * 1000; // Convertir a miliamperios

        voltajeLabel.textContent = V.toFixed(1);
        resistenciaLabel.textContent = R.toFixed(0);
        corrienteOutput.textContent = I_mA.toFixed(1);

        // Ajustar el tamaño del texto de la fórmula basado en los valores
        const vSize = 2 + V / 5; 
        const rSize = 2 + R / 1000; 
        const iSize = 2 + I_mA / 2000; 

        vText.style.fontSize = `${vSize}rem`;
        rText.style.fontSize = `${rSize}rem`;
        iText.style.fontSize = `${iSize}rem`;
    }

    resetBtn.addEventListener('click', () => {
        voltajeSlider.value = 4.5;
        resistenciaSlider.value = 500;
        actualizarValores();
    });

    voltajeSlider.addEventListener('input', actualizarValores);
    resistenciaSlider.addEventListener('input', actualizarValores);

    actualizarValores();
});
function updateFormulaFontSize(voltage, resistance) {
  const scale = Math.min(2, Math.max(1, (voltage + resistance / 1000) * 0.5));
  document.getElementById("vLetter").style.transform = `scale(${scale})`;
  document.getElementById("iLetter").style.transform = `scale(${scale})`;
  document.getElementById("rLetter").style.transform = `scale(${scale})`;
}

