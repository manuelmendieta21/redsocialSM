/*
Requerimientos del ejercicio
1.El usuario debe poder ingresar su usuario y contraseña
2.El sistema debe ser capaz de validar si el usuario y constraseña ingresados 
por el usuario existen en la base de datos
3.Si el usuario y contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar
timeline del usuario.
4.Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y 
no mostrar ningun timeline


*/
// Ejemplo de uso de SweetAlert2 para mostrar un mensaje de confirmación

function fire(){
    Swal.fire({
        title: '¡ouch!',
        text: '¡Usuario no encontrado!',
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

function confirm(){
    Swal.fire({
        title: '¡Inicio correcto!',
        icon: 'success',
        showConfirmButton: false,
        timer:2100
    }).then(function(){
        window.location.href = 'dashboard.html'; 
    });
}

const usersDatabase = [
    {
        username: "Juan",
        password: "123"
    },
    {
        username: "María",
        password: "abc"
    },
    {
        username: "Pedro",
        password: "xyz"
    }
];


function validateLogin(event) {
    event.preventDefault(); // Evitar que se envíe el formulario por defecto

    const username = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Llamar a la función para buscar el usuario en la base de datos
    findByUser(username, password);
}
    
function findByUser(login, password) {
    let userFound = false;

    for (let i = 0; i < usersDatabase.length; i++) {
        if (usersDatabase[i].username === login && usersDatabase[i].password === password) {
            console.log("Usuario autenticado correctamente");
            userFound = true;
            playAlertSound1()
            confirm()
            // Redireccionar a otra página después del inicio de sesión exitoso
            // Cambia 'dashboard.html' por la URL de la página a la que quieres redirigir

            break;
        }
    }

    if (!userFound) {
        console.log('Usuario o contraseña incorrectos');
        playAlertSound();
        fire() // Mostrar mensaje de error al usuario

    }
}

function playAlertSound() {
    const alertSound = document.getElementById('alertSound');
    if (alertSound) {
        alertSound.play();
    }
}
function playAlertSound1() {
    const alertSound = document.getElementById('alertSound');
    if (alertSound1) {
        alertSound1.play();
    }
}
// Agregar evento 'submit' al formulario para llamar a validateLogin
document.getElementById('loginForm').addEventListener('submit', validateLogin);
//findByUser(login, password)

/*
usersDatabases.forEach(element => {

    if (login===element.usename && password === element.password){
       
        console.log(`Bienvenido ${login}`);  

        
    }
    else{
        console.log('Usuario o contraseña incorrecta');
    }
    //console.log(`User ${element.usename} with password ${element.password}`);
});
*/