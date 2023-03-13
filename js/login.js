// const usuario = JSON.parse(localStorage.getItem('usuarios'));


const listaUsuarios = document. querySelector('#lista-usuarios');  /*  Se agrega en el DIV para luego mostrar  */
const regusuario = document.querySelector('#ficha-usuario');   

document.addEventListener('DOMContentLoaded', () =>{

    if(JSON.parse(localStorage.getItem('usuarios')) != null){
        usuarios = JSON.parse(localStorage.getItem('usuarios'))
       }
       
      mostrarU();


})


const sincronizarU= () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

}



const mostrarError = (error) => {
    const mensajeError = document.createElement('h3')
    mensajeError.textContent = error;
    mensajeError.classList.add('error')

    document.body.appendChild(mensajeError);

    setTimeout( () =>{
    mensajeError.remove()
    },3000)
}

 const limpiarHTMLU = () => {
    while(listaUsuarios.firstChild){
    listaUsuarios.removeChild(listaUsuarios.firstChild)
    }
}

const mostrarU = () =>{
    
    limpiarHTMLU();
 
    if(usuarios.length > 0){
        usuarios.forEach(usuario =>{
        const u = document.createElement('p');
        u.textContent = " ----> " +usuario.usuario + " <---- ";
 
         listaUsuarios.appendChild(u)
 
         })         
 
     }
     sincronizarU()
 
 }

function iniciosesion(){

    if(usuarios.length > 0){
        usuarios.forEach(usuario =>{

           usuariosesion = usuario.usuario
           clavesesion = usuario.clave

           usu = document.querySelector('#usuario').value
           clav = document.querySelector('#claveusu').value

           if(usuariosesion == usu && clavesesion == clav){
                window.location=("menu.html")
        
           }else{

             mostrarError('Datos incorrectos, verifique y vuelva a ingresar')
                              

                      
           }

        })

}

}



     


    














    

