let errores=[];//cargamos las validacionesn
window.onload=function(){
  
    console.log("hola")

    let formulario =document.querySelector('.formulario');
   
    
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    

  
    let checkEmail=document.getElementById('check-email')//MAIL
    let checkPassword=document.getElementById('check-password')

  
    let errorPassword=document.getElementById('error-password')
    let errorEmail=document.getElementById('error-correo')//MAIL

    

    //ESCUCHADOR PARA EL SUBMIT
    
    formulario.addEventListener('submit',(evt)=>{
        evt.preventDefault();//detiene el formulario (envio)
        let errores=[];//cargamos las validacionesn


     
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
      
        if (errores.length){
            evt.preventDefault();

            //TO-DO: IMPLEMENTAR VALIDACION
        }else{
            alert("Formulario enviado")
        }

         


    })
    //ESCUCHADOR ONCHANGE, MUESTRA MENSAJES AL MOMENTO

    
        

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