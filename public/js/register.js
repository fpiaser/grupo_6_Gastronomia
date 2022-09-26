window.onload = function(){


    const formulario = document.getElementById('formulario')
    const inputs=document.querySelectorAll('#formulario input')
    

    const expresiones = {
	
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
	
}




const campos = {
	
	nombre: false,
    apellido:false,
	password: false,
	correo: false
	
}



    const validarFormulario = (evt)=>{

        switch(evt.target.name){
            case "nombre":

            if(expresiones.nombre.test(evt.target.value) &&(evt.target.value.length>1)){
                document.getElementById("nombre").classList.remove('campo-incorrecto')
                document.getElementById("nombre").classList.add('campo-correcto')
                document.querySelector('#nombre i').classList.add('fa-check-circle')
                document.querySelector('#nombre i').classList.remove('fa-times-circle')
                document.querySelector("#nombre .formulario__input-error").classList.remove('formulario__input-error-activado')
                campos[nombre]=true;



            }else{
                document.getElementById("nombre").classList.add('campo-incorrecto')
                document.getElementById("nombre").classList.remove('campo-correcto')
                document.querySelector('#nombre i').classList.add('fa-times-circle')
                document.querySelector('#nombre i').classList.remove('fa-check-circle')
                document.querySelector("#nombre .formulario__input-error").classList.add('formulario__input-error-activado')


            }
                
            break; 
            
            case "apellido":
                if(expresiones.nombre.test(evt.target.value) &&(evt.target.value.length>1)){
                    document.getElementById("apellido").classList.remove('campo-incorrecto')
                    document.getElementById("apellido").classList.add('campo-correcto')
                    document.querySelector('#apellido i').classList.add('fa-check-circle')
                    document.querySelector('#apellido i').classList.remove('fa-times-circle')
                    document.querySelector("#apellido .formulario__input-error").classList.remove('formulario__input-error-activado')
                    campos[apellido]=true;


    
                }else{
                    document.getElementById("apellido").classList.add('campo-incorrecto')
                    document.getElementById("apellido").classList.remove('campo-correcto')
                    document.querySelector('#apellido i').classList.add('fa-times-circle')
                    document.querySelector('#apellido i').classList.remove('fa-check-circle')
                    document.querySelector("#apellido .formulario__input-error").classList.add('formulario__input-error-activado')
                }
                
            break; 
            case "password":
                if(expresiones.password.test(evt.target.value) &&(evt.target.value.length>7)){
                    document.getElementById("grupo__password").classList.remove('campo-incorrecto')
                    document.getElementById("grupo__password").classList.add('campo-correcto')
                    document.querySelector('#grupo__password i').classList.add('fa-check-circle')
                    document.querySelector('#grupo__password i').classList.remove('fa-times-circle')
                    document.querySelector("#grupo__password .formulario__input-error").classList.remove('formulario__input-error-activado')
                    campos[password]=true


    
                }else{
                    document.getElementById("grupo__password").classList.add('campo-incorrecto')
                    document.getElementById("grupo__password").classList.remove('campo-correcto')
                    document.querySelector('#grupo__password i').classList.add('fa-times-circle')
                    document.querySelector('#grupo__password i').classList.remove('fa-check-circle')
                    document.querySelector("#grupo__password .formulario__input-error").classList.add('formulario__input-error-activado')
                }
                
            break; 
            case "correo":
                if(expresiones.correo.test(evt.target.value)){
                    document.getElementById("grupo__correo").classList.remove('campo-incorrecto')
                    document.getElementById("grupo__correo").classList.add('campo-correcto')
                    document.querySelector('#grupo__correo i').classList.add('fa-check-circle')
                    document.querySelector('#grupo__correo i').classList.remove('fa-times-circle')
                    document.querySelector("#grupo__correo .formulario__input-error").classList.remove('formulario__input-error-activado')
                    campos[correo]=true;


    
                }else{
                    document.getElementById("grupo__correo").classList.add('campo-incorrecto')
                    document.getElementById("grupo__correo").classList.remove('campo-correcto')
                    document.querySelector('#grupo__correo i').classList.add('fa-times-circle')
                    document.querySelector('#grupo__correo i').classList.remove('fa-check-circle')
                    document.querySelector("#grupo__correo .formulario__input-error").classList.add('formulario__input-error-activado')
                }
             
            break;

        }

 
    }





      inputs.forEach((input)=>{
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);

         
        
      })
 

        formulario.addEventListener("submit", (e)=>{
            e.preventDefault();

            if(campos.nombre && campos.apellido && campos.password && campos.correo){

                formulario.reset();

                document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activado")

            }else{
                
            }


 
}
)}

