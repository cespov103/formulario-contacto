document.getElementById('contactForm').addEventListener('submit',function(event){
    event.preventDefault();

    // Validación básica y obtención de datos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if(name && email && phone && subject && message){
        // Simulación de envío de formulario
        document.getElementById('succesMessage').style.display = 'block';

        // Resetear el formulario
        document.getElementById('contactForm').reset();

    } else {
        // Alerta si algún campo está vacío
        alert('Por favor, complete todos los campos del formulario.');
    }
})