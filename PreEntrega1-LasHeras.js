function datosAsolicitar() {
    let nombre;
    let dni;
}

//PEDIR DATOS HASTA QUE ESTÉN CORRECTOS
do {
    nombre = prompt("Ingrese un nombre completo para conseguir turno con Catalina Lopez Licenciada en Psicologia");
    dni = parseInt(prompt("Ingrese su DNI o pasaporte"));
} while (nombre == "" || dni == "");

//MOSTRAR DATOS INGRESADOS POR EL PACIENTE
const nombreYdni = `${nombre} ${dni}`;
let precioConsulta = 2500;
alert("Su nombre es: " + nombreYdni + " " + "A continuación se le asignará su turno. El costo es de" + " " + "$" + precioConsulta);

//ASIGNAR NUMERO DE TURNO
let i = 1;
for (let i = 1; i <= 20; i++) {
    let diaDeTurno = prompt("Teniendo en cuenta que se asignan turnos de Lunes a Viernes, escoja el día que desea su turno");
    if (diaDeTurno === "") {
        break;
    }
    alert("Su turno fue registrado para el día" + " " + diaDeTurno + " " + "a las 18:15." + " " + "Su numero de turno es:" + i);
    let obraSocial = parseInt(prompt("Elija opción correcta según su obra social: 1. Sin obra social, 2. Galeno, 3. OSDE"));
    switch (obraSocial) {
        case 1:
            precioConsulta = precioConsulta;
            alert("El costo final de su consulta  sin descuento es de" + " " + "$" + precioConsulta);
            break;
        case 2:
            precioConsulta = precioConsulta * 0.3;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        case 3:
            precioConsulta = precioConsulta * 0.5;
            alert("El costo final de su consulta con descuento es de" + " " + "$" + precioConsulta);
            break;
        default:
            alert("Usted ingresó una opción inexistente");
            break;
    }
}

datosAsolicitar();
