window.onload = function(){

    console.log("validaciones del front añadir producto")
    let form = document.querySelector('form.formulario')
    let nombre = document.getElementById('nombre')
    let descripcion = document.getElementById('descripcion')
    /* let uom = document.getElementById('uom') */
    /* let categoria = document.getElementById('categoria') */
    let precio = document.getElementById('precio')
    let imagen = document.getElementById('imagen')

    let errorNombre=document.getElementById('error-nombre1')

    producto.focus(); //foco en el nombre producto

    //Validacion de submit
    form.addEventListener('submit', (evt) => {
        let errores = []; //carga de errores de validacion
        console.log("errores al inicio de cargue, ", errores);

        //producto
        if(nombre.value.length < 0 || nombre.value.length <=4 ) {
            errores.push("el campo no puede estar vacio y debe ser mayor a 4 caracteres")
            nombre.style.borderColor = 'red';
            errorNombre.style.display = 'block';
        }else {
            errorNombre.style.display = 'none';
        }
        
        //descripcion
        if(descripcion.value.length < 0 || descripcion.value.length <=19 ) {
            errores.push("el campo no puede estar vacio")
            descripcion.classList.remove('campo')
            descripcion.classList.add('is-invalid')
            //console.log(errores)
        } else {
            descripcion.classList.remove('is-invalid')            
            descripcion.classList.add('is-valid')

        }

        //Precio mayor a 0
        if(precio.value.length  < 0 ) {
            errores.push("el campo no puede estar vacio")
            precio.classList.add('is-invalid')
            //console.log(errores)
        } else {
            precio.classList.remove('is-invalid')
            precio.classList.add('is-valid')

        }
        //imagen permitida
        let filePath = imagen.value;
        let extensionPermitidas = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        console.log(filePath)
        if(!extensionPermitidas.exec(filePath) ) {
            
            //console.log(errores)
        } else {
            //alert('Extensión correcta.');
           

        }

        //Si no esta vacio detiene el envio del formulario
        if (errores.length){
            evt.preventDefault();
        }
        console.log("errores al momento de cargue, ", errores);
    }) 
    //validacion de cada input
    producto.addEventListener('blur', (evt) => {
        let errores = [];
        if(producto.value.length == 0 || producto.value.length <=4 ) {
            errores.push("elcampo no puede estar vacio")
            producto.style.color = 'red';
            producto.classList.add('is-invalid')
            
            //console.log(errores)
        } else {
            producto.classList.remove('is-invalid')
            producto.classList.add('is-valid')

        }
    })

    /* descripcion.addEventListener('blur', (evt) => {
        let errores = [];
        if(descripcion.value.length == 0 || descripcion.value.length <=19 ) {
            errores.push("el campo no puede estar vacio")
            descripcion.classList.remove('campo')
            descripcion.classList.add('is-invalid')
            //console.log(errores)
        } else {
            descripcion.classList.remove('is-invalid')            
            descripcion.classList.add('is-valid')

        }
    })

    precio.addEventListener('blur', (evt) => {
        let errores = [];
        if(precio.value  < 1 ) {
            errores.push("el campo no puede estar vacio")
            precio.classList.add('is-invalid')
            //console.log(errores)
        } else {
            precio.classList.remove('is-invalid')
            precio.classList.add('is-valid')

        }
    })

    imagen.addEventListener('blur', (evt) => {
        let errores = [];
        let filePath = imagen.value;
        let extensionPermitidas = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        console.log(filePath)
        if(!extensionPermitidas.exec(filePath) ) {
            errores.push("el campo no puede estar vacio")
            imagen.classList.add('is-invalid')
            //alert('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');
            extensionPermitidas.value = '';
                return false;
            //console.log(errores)
        } else {
            //alert('Extensión correcta.');
            imagen.classList.remove('is-invalid')
            imagen.classList.add('is-valid')

        }
    })

   /*  uom.addEventListener('blur', (evt) => {
        let errores = [];
        console.log(uom.value)
        if(uom.value = 0 ) {
            errores.push("el campo no puede estar vacio")
            uom.classList.add('is-invalid')
            uom.classList.add('campo incorrecto')
            //console.log(errores)
        } else {
            uom.classList.remove('is-invalid')
            uom.classList.add('is-valid')

        }
        
    }) */




} 