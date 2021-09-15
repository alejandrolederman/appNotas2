let tareas = require ("./funcionesDeTareas");


if(process.argv.length < 3){

    console.log ("Atencion - Tienes que pasar una accion");
}

else{
    
    switch (process.argv [2]){
  
        case "listar": 

            console.log (tareas);
       
            break;
  
        default : console.log ("no entiendo que quieres hacer");
    }
  

  
}