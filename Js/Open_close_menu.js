const texts = ["{Valkiria", "Developer}"]; // Textos a escribir
const headings = [
    document.getElementById('typing-heading1'),
    document.getElementById('typing-heading2')
];

function typeWriter(index) {
    const text = texts[index];
    const heading = headings[index];

    let charIndex = 0;

    function type() {
        if (charIndex < text.length) {
            heading.textContent += text.charAt(charIndex);
            charIndex++;
            setTimeout(type, 100); // Velocidad de escritura (100ms)
        } else {
            // Si se completó la escritura de la palabra actual
            if (index + 1 < texts.length) {
                // Llamar recursivamente para la siguiente palabra después de 1 segundo
                setTimeout(() => {
                    typeWriter(index + 1);
                }, 1000); // Esperar 1 segundo antes de iniciar la siguiente palabra
            }
        }
    }

    // Iniciar el efecto de máquina de escribir para la palabra actual
    type();
}

// Iniciar el efecto de máquina de escribir para la primera palabra
typeWriter(0);

