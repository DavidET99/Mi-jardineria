$(document).ready(function() {
    $("#registro").submit(function(event) {
        var nombreUsuario = $("#nombre-usuario").val();
        var nombre = $("#nombre").val();
        var edad = $("#edad").val();
        var correo = $("#correo").val();

        var nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre);
        if (!nombreValido) {
            alert("Nombre y apellido no debe contener caracteres especiales ni numeros.");
            event.preventDefault();
            return;
        }

        if (parseInt(edad) < 18) {
            alert("Debes ser mayor de 18 años para registrarte.");
            event.preventDefault(); 
            return;
        } else {
            alert("Formulario enviado correctamente.");
        }
    });
});