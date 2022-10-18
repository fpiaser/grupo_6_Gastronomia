let errores = [];
window.onload = function(){

    console.log("validaciones del front añadir nombre")
    let form = document.getElementById('formulario')
    let nombre = document.getElementById('nombre')
    let descripcion = document.getElementById('descripcion')
    /* let uom = document.getElementById('uom') */
    /* let categoria = document.getElementById('categoria') */
    let precio = document.getElementById('precio')
    let imagen = document.getElementById('imagen')

    let errorNombre=document.getElementById('error-nombre1')
    let errorDescripcion = document.getElementById('error-descripcion')    
    let errorPrecio=document.getElementById('error-precio')
    let errorImagen=document.getElementById('error-imagen')

    let checkNombre=document.getElementById('check-nombre')
    let checkDescripcion=document.getElementById('check-descripcion')
    let checkPrecio=document.getElementById('check-precio')
    

    nombre.focus(); //foco en el nombre producto

    //Validacion de submit
    form.addEventListener('submit', (evt) => {
        let errores = []; //carga de errores de validacion
        console.log("errores al inicio de cargue, ", errores);

        //producto
        if(nombre.value.length < 0 || nombre.value.length <=4 ) {
            errores.push("el campo no puede estar vacio y debe ser mayor a 4 caracteres")
            nombre.style.borderColor = 'red';
            errorNombre.style.display = 'block';
            console.log(errores)
            
        }else {
            errorNombre.style.display = 'none';
        }
        
        //descripcion
        if(descripcion.value.length < 0 || descripcion.value.length <=19 ) {
            errores.push("el campo no puede estar vacio, debe contener 20 caracteres")
            descripcion.style.borderColor = 'red';
            errorDescripcion.style.display = 'block';
            console.log(errores)
            //console.log(errores)
        } else {
            errorDescripcion.style.display = 'none'

        }

        //Precio mayor a 0
        if(precio.value.length  < 0 ) {
            errores.push("el precio debe ser mayor a 0")
            precio.style.borderColor = 'red';
            errorPrecio.style.display = 'block';   
        } else {
            errorPrecio.style.display = 'none'

        }
        //imagen permitida
        let filePath = imagen.value;
        let extensionPermitidas = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        console.log(filePath)
        if(!extensionPermitidas.exec(filePath) ) {
            errores.push("El campo no puede estar vacio")
            imagen.style.borderColor='red'
            errorImagen.style.display="block"
            //console.log(errores)
        } else {
            imagen.style.borderColor="green"
            //alert('Extensión correcta.');
           

        }

        //Si no esta vacio detiene el envio del formulario
        if (errores.length){
            evt.preventDefault();
        }else {
            alert("Registro enviado")

            formulario.submit() 
        }
        console.log("errores al momento de cargue, ", errores);
    }) 
    //validacion de cada input
    nombre.addEventListener('blur', (evt) => {
        
        if(nombre.value.length <=4 ) {
            errores.push("elcampo no puede estar vacio")
            nombre.style.bordercolor = 'red';
            checkNombre.style.display = 'none'            
            console.log("campos vacios falso",errores)
        } else {
            nombre.style.borderColor="green"
            checkNombre.style.display="block"
            errorNombre.style.display="none"
        }
    })

   descripcion.addEventListener('blur', (evt) => {
        
        if( descripcion.value.length <=19 ) {
            errores.push("el campo no puede estar vacio")
            descripcion.style.bordercolor = 'red';
            checkDescripcion.style.display = 'none';
            
            //console.log(errores)
        } else {
            descripcion.style.borderColor = 'green';
            checkDescripcion.style.display = 'block';
            errorDescripcion.style.display = 'none'
        }
    })
   
    precio.addEventListener('blur', (evt) => {
        
        if(precio.value  < 1 ) {
            errores.push("el debe ser mayor a 0")
            precio.style.bordercolor = 'red';
            checkPrecio.style.display = 'none';
            
            //console.log(errores)
        } else {
           precio.style.borderColor = 'green';
            checkPrecio.style.display = 'block';
            errorPrecio.style.display = 'none'
        }
    })

    imagen.addEventListener('blur', (evt) => {
        
        let filePath = imagen.value;
        let extensionPermitidas = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
        console.log(filePath)
        if(!extensionPermitidas.exec(filePath) ) {
            errores.push("Extensiones de imagen no permitidas")
            imagen.style.bordercolor = 'red';
           //checkImagen.style.display = 'none';
           extensionPermitidas.value = '';
           return false;
            //console.log(errores)
        } else {
           imagen.style.borderColor = 'green';
            //checkImagen.style.display = 'block';
            errorImagen.style.display = 'none'
        }
    })

   
} 