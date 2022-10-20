let errores=[];//cargamos las validacionesn
window.onload=function(){
  
    console.log("hola")

    let formulario =document.getElementById('formulario');
    let nombre= document.getElementById('nombre');
    let apellido=document.getElementById('apellido');
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let imagen=document.getElementById('imagen')

    let checkNombre=document.getElementById('check-nombre')
    let checkApellido=document.getElementById('check-apellido')
    let checkEmail=document.getElementById('check-email')//MAIL
    let checkPassword=document.getElementById('check-password')

    let errorNombre=document.getElementById('error-nombre1')
    let errorApellido=document.getElementById('error-nombre2')
    let errorPassword=document.getElementById('error-password')
    let errorEmail=document.getElementById('error-correo')//MAIL
    let errorImagen=document.getElementById('error-imagen')

    nombre.focus()

    //ESCUCHADOR PARA EL SUBMIT
    
    formulario.addEventListener('submit',(evt)=>{
        evt.preventDefault();//detiene el formulario (envio)
        let errores=[];//cargamos las validacionesn


        if(! nombre.value.length){
            errores.push("El campo no puede estar vacio")
            nombre.style.borderColor='red'
            errorNombre.style.display="block"
        }else{
            errorNombre.style.display="none"
        }
        if(! apellido.value.length){
            errores.push("El campo no puede estar vacio")
            apellido.style.borderColor='red'
            errorApellido.style.display='block'
        }
        if(! email.value.length){
            errores.push("El campo no puede estar vacio")
            email.style.borderColor='red'
            errorEmail.style.display='block'
        }else{
            errorEmail.style.display='none'
        }
        if(! password.value.length){
            errores.push("El campo no puede estar vacio")
            password.style.borderColor='red'
            errorPassword.style.display='block'
        }else{
            errorPassword.style.display='none'
        }
        if(! imagen.value.length){
            errores.push("El campo no puede estar vacio")
            imagen.style.borderColor='red'
            errorImagen.style.display="block"
        }else{
            imagen.style.borderColor="green"
        }

        if (errores.length){
            evt.preventDefault();

            //TO-DO: IMPLEMENTAR VALIDACION
        }else{

         alert("Registro enviado")

            formulario.submit()
            
        }

         


    })
    //ESCUCHADOR ONCHANGE, MUESTRA MENSAJES AL MOMENTO

    nombre.addEventListener('blur', (evt)=>{
        
        let element=evt.target;

        if(nombre.value.length<2){
            errores.push("El campo debe tener mas de dos letras");
            nombre.style.borderColor='red'
            checkNombre.style.display="none"

        }else{
            nombre.style.borderColor="green"
            checkNombre.style.display="block"
            errorNombre.style.display="none"
            
        }
       

        
    })
    
    apellido.addEventListener('keyup', (evt)=>{
        
        if(apellido.value.length<2){
            errores.push("El campo debe tener mas de dos letras")
            apellido.style.borderColor='red'
            checkApellido.style.display="none"
           
        }else{
            apellido.style.borderColor="green"
            checkApellido.style.display="block"
            errorApellido.style.display="none"
            
            
            
        }
    })

    password.addEventListener('keyup', (evt)=>{
        
        if(password.value.length<8){
            errores.push("El campo debe tener mas de dos letras")
            password.style.borderColor='red'
            
            checkPassword.style.display="none"
           
        }else{
            password.style.borderColor="green"
            checkPassword.style.display="block"
            errorPassword.style.display="none"
            
            
            
        }

        imagen.addEventListener('blur', (evt) => {
            /*let errores = [];*/
            let filePath = imagen.value;
            let extensionPermitidas = /(.jpg|.jpeg|.png|.gif|.webp)$/i;
            console.log(filePath)
            if(!extensionPermitidas.exec(filePath) ) {
                errores.push("el campo no puede estar vacio")
                imagen.style.borderColor="red"
    
               /* alert('Extensión no permitida. Utiliza: .jpeg/.jpg/.png/.gif.');*/
                extensionPermitidas.value = '';
                    return false;
                //console.log(errores)
            } else {
                //alert('Extensión correcta.');
                imagen.style.borderColor="green"
                errorImagen.style.display="none"
    
            }
    
        })
    })
     email.addEventListener('keyup', (evt)=>{
        
        if((email.value).includes("@")){
            email.style.borderColor="green"
            errorEmail.style.display="none"
            checkEmail.style.display='block'
        }else{
            errores.push("El campo debe poseer mail valido")
            email.style.borderColor='red'
            checkEmail.style.display='none'


        }
        

     })


       
   
}

console.log("holaa")