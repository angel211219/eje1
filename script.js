document.getElementById('convertBtn').addEventListener('click', convertHoursToSeconds);

function convertHoursToSeconds() {
    // Obtener la cantidad de horas del input
    const hours = parseFloat(document.getElementById('hoursInput').value);
    
    // Manejo de valores negativos
    if (hours < 0) {
        document.getElementById('result').innerText = 'Ingrese una cantidad de horas válida (positiva).';
        return;
    }

    // Convertir horas a segundos
    const seconds = hours * 3600;

    // Mostrar el resultado
    document.getElementById('result').innerText = `Equivalente en segundos: ${seconds}`;
}
