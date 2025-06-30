const formulario = document.getElementById('Formulario_Contacto'); //guardamos el formulario en una variable
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); //indicamos que cuando en from se realize un submit va generar y ejecutar un metodo ('preventDefault()' para evitar
      //que se recargue la pagina al enviar el form).
      const datos = Object.fromEntries(new FormData(formulario).entries()); //devuelve los datos enviados en las casillas que estan en el formulario.

      const res = await fetch('http://localhost:3000/api/correo/enviar', { //se indica la URl que va seguir el metodo, el metodo y el lenguaje.
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos)
      });

      const json = await res.json();
      alert(json.mensaje);// si el fetch encuentra la URL guardara los datos que se enviaron del formulario en tipo JSON.
    });