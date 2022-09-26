
window.onload = function(){

    
    let formulario = document.getElementById('formulario');
    let inputs = document.querySelectorAll('#formulario input');

 
    let validarFormulario=(e)=>{

        switch(e.target.name){
            case "nombre":

                if(e.target.value.lenght<2){
                    
                }

            break;
            case "apellido":
                
            break;
            case "correo":
                
            break;
            case "password":
                
            break;

        }

    }

    inputs.forEach((input)=>{
        input.addEventListener("keyup",validarFormulario);
        input.addEventListener("blur", validarFormulario);
            
        })


     
        

        formulario.addEventListener("submit", (e)=>{
            e.preventDefault();
        })
        
        
  }

   
