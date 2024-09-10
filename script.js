document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');
    const menuClose = document.getElementById('menu-close');
    const inscribirseButton = document.getElementById('inscribirse');

    // Mostrar el menú al hacer clic en el ícono
    menuIcon.addEventListener('click', () => {
        menu.classList.add('open');
    });

    // Cerrar el menú al hacer clic en el botón de cierre
    menuClose.addEventListener('click', () => {
        menu.classList.remove('open');
    });

    // Mostrar un mensaje al hacer clic en el botón de inscripción
    inscribirseButton.addEventListener('click', () => {
        alert('¡Gracias por tu interés! Pronto te contactaremos con más detalles.');
    });
});

