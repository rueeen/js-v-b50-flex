const personas = [];

const inputNombre = document.querySelector('#nombre');
const inputEdad = document.querySelector('#edad');
const inputPassword = document.querySelector('#password');
const inputLicencia = document.querySelector('#licencia');

//console.log(inputNombre.value); // Su valor es vacio porque al iniciar el script el valor del input es vacio

// Para poder capturar los datos de un formulario debemos trabajr con eventos

// evento change
/**inputNombre.addEventListener('change', function(e){
    console.log('Ejecutando evento change');
    console.log(`Escribiendo ${e.target.value}`)
});**/

const agregar = document.getElementById('btn-agregar');

agregar.addEventListener('click', function () {
    const nombre = inputNombre.value;
    const edad = inputEdad.value;
    const password = inputPassword.value;
    const licencia = inputLicencia.value; // Este no deberimos usarlo en checkbox
    const licenciaBool = inputLicencia.checked; // Esto es para checkbox

    console.log('Hice click');
    console.log(`Datos: ${nombre} - ${edad}- ${password}- ${licencia}- ${licenciaBool}`);

    const persona = {
        nombre: nombre,
        edad,
        password,
        licenciaBool
    }

    console.table(persona);

    personas.push(persona);

    const tbody = document.querySelector('table tbody');
    tbody.innerHTML = '';
    personas.forEach(function (p) {
        // Dibujando tabla
        const tr = document.createElement('tr');
        tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>${p.edad}</td>
        <td>${p.licenciaBool ? 'Si tiene':'No tiene'}</td>
        `
        tbody.appendChild(tr)
    })

    alert('Se agrego la persona')
    limpiar_campos()
});

function limpiar_campos(){
    const inputs = document.querySelectorAll('input');

    inputs.forEach(function(i){
        i.value = ''
    })
}