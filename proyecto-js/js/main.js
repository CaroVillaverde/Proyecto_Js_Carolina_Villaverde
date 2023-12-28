
let userId = 1;
let usuarios = [];

class Usuario {
    constructor( nombre, apellido,email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.id = userId;
    }
}

const agregarUsuario = (usuario) => {
   usuarios.push(usuario);
   userId++
};
const eliminarUsuario = ( id ) => {
    let existe = usuarios.some ( usuario => usuario.id === id)
    if(existe){
        usuarios = usuarios.filter(usuario => usuario.id !== id);
    } else {
        alert("No existe ningún usuario con ese ID")
    }
};

const mostrarUsuario = () => {
        let nombreUsuario = usuarios.map (usuario => `ID: ${usuario.id} - Nombre: ${usuario.nombre}`);
        if (nombreUsuario.length > 0) {
        alert(nombreUsuario.join("\n"))
        } else { 
            alert("No hay usuarios registrados");
        }
 };

const menuUsuario = () => {
    let estado = true;
    while (estado){ 
        let opcion = parseInt(
            prompt(`
                ¡Bienvenidx!
                Menú de usuarios
                1- Mostrar usuarios
                2- Agregar un usuario
                3- Eliminar un usuario
                4- Volver
                `
             )
        );
        switch (opcion) {
            case 1:
             mostrarUsuario();
             break;
            case 2:
                let nombre = prompt ("Ingrese el nombre del usuario");
                let apellido = prompt ("Ingrese el apellido del usuario");
                let email = prompt ("Ingrese el email del usuario");
                let usuario = new Usuario(nombre, apellido, email);

             agregarUsuario(usuario);
             break;
            case 3:
             let idUsuario = parseInt(prompt("Ingrese el ID del usuario a eliminar"));
             eliminarUsuario(idUsuario);
             break;
            case 4:
                estado = false;
                menuPrincipal();
             break;
            
            default:
              alert("Ingrese una opción válida")
              break;
        }
    }
}
const menuPrincipal = () => {
    let encendido = true;

    while (encendido){
        let opcion = parseInt(
            prompt( `
            Bienvenidx a nuestra aplicación de mascotas
            1- Opciones de usuarios
            2- Opciones de mascota
            3- Salir
            `
          )
        )
        switch(opcion){
            case 1:
              menuUsuario();
             break;
            case 2:
               //menu de mascotas
             break;
            case 3:
             encendido = false;
             break;


            default:
                alert("Ingrese una opción válida")
              break;
        }
    }
};

menuPrincipal();