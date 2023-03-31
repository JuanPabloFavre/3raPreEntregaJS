
const listaUsuarios = document. querySelector('#lista-usuarios');  /*  Se agrega en el DIV para luego mostrar  */
const regusuario = document.querySelector('#ficha-usuario');      /* Se agrega en el form del HTML  */

const listaProductos = document.querySelector('#lista-productos');
const regproductos = document.querySelector('#ficha-productos');

const listaClientes = document.querySelector('#lista-clientes');
const registro = document.querySelector('#ficha-registro')

const listaventa = document.querySelector('#lista-venta');
const registroventa = document.querySelector('#ficha-venta');


let usuarios = [];
let productos = [];
let clientes = [];
let ventas = [];







document.addEventListener('DOMContentLoaded', () =>{

    if (JSON.parse(localStorage.getItem('productos')) !=null){
        productos = JSON.parse(localStorage.getItem('productos'))
    
    }
mostrarP();
   

    if(JSON.parse(localStorage.getItem('usuarios')) != null){
    usuarios = JSON.parse(localStorage.getItem('usuarios'))
   }

   
mostrarU();

  
  if(JSON.parse(localStorage.getItem('clientes')) != null){
    clientes = JSON.parse(localStorage.getItem('clientes'))
}
mostrarC();


if(JSON.parse(localStorage.getItem('ventas')) != null){
    ventas = JSON.parse(localStorage.getItem('ventas'))
}
mostrarV();



      
})

const sincronizarU= () => {
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

}

const sincronizarP= () => {
    localStorage.setItem('productos' , JSON.stringify(productos));

}

const sincronizarC= () => {
    localStorage.setItem('clientes', JSON.stringify(clientes))
}

const sincronizarV= () => {
    localStorage.setItem('ventas', JSON.stringify(ventas))
}




const mostrarError = (error) => {
    const mensajeError = document.createElement('p')
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
    const limpiarHTMLC = () => {
    while(listaClientes.firstChild){
    listaClientes.removeChild(listaClientes.firstChild)
    }
}
    const limpiarHTMLP = () => {
    while(listaProductos.firstChild){
    listaProductos.removeChild(listaProductos.firstChild)
    }
}
    const limpiarHTMLV = () => {
    while(listaventa.firstChild){
    listaventa.removeChild(listaventa.firstChild)
   }
}


const mostrarU = () =>{
    
   limpiarHTMLU();

   if(usuarios.length > 0){
       usuarios.forEach(usuario =>{
       const u = document.createElement('p');
       const z = document.createElement('p');
       u.textContent = usuario.Nombre + " " + usuario.Apellido + " - " + "Usuario: " + usuario.usuario + "   --->  clave: " + usuario.clave;
       z.textContent = "____________________"  
        listaUsuarios.appendChild(u)
        listaClientes.appendChild(z)

        })         

    }
    sincronizarU()

}


const mostrarP = () =>{

    limpiarHTMLP();
    
    if(productos.length > 0){
        productos.forEach(producto =>{
            const p = document.createElement('p');
            p.textContent = "Codigo: "+producto.codigo + " | " + " Producto: " +  "   " + producto.nombre + " | " +  "Moneda:  " + "   " + producto.moneda + " | " +  "Precio: " +  "   " + producto.precio;
    
            listaProductos.appendChild(p)
        })
    sincronizarP()
    }
    
    }

    const  mostrarC = ()=> {
        limpiarHTMLC()
    
            if(clientes.length > 0){
                clientes.forEach(cliente =>{
                const c = document.createElement('p');
                const z = document.createElement('p');
                c.textContent = cliente.id + " " +cliente.Nombre + " " + cliente.Apellido + " - " + cliente.Direccion + " - " + cliente.Telefono + " - " + cliente.Email;
                c.id = cliente.id;  
                z.textContent = "____________________"      
                            
                listaClientes.appendChild(c)
                listaClientes.appendChild(z)
                
                });
            }
            sincronizarC()
           }

           const mostrarV = () =>{
        limpiarHTMLV();

            if(ventas.length >0){
                ventas.forEach(venta =>{
                const t = document.createElement('p')
                const v = document.createElement('p')
                const w = document.createElement('p')
                const x = document.createElement('p')
                const y = document.createElement('p')
                const z2 = document.createElement('p')
                const z3 = document.createElement('p')
                const z = document.createElement('p')
                
                v.textContent = venta.comprobante  + "  || " + "Nombre: " + " " + venta.cliente; 
                w.textContent ="Cantidad: " + " " + venta.cant1 + " --- " + venta.art1 + " --- " +"Total: " + " " + venta.moneda+ venta.tot1
                x.textContent ="Cantidad: " + " " + venta.cant2 + " --- " + venta.art2 + " --- " +"Total: " + " " + venta.moneda+ venta.tot2 
                y.textContent ="Cantidad: " + " " + venta.cant3 + " --- " + venta.art3 + " --- " +"Total: " + " " + venta.moneda+ venta.tot3
                z.textContent = "Sub-Total:  " + venta.moneda + venta.subtotal 
                z2.textContent ="IVA: " + venta.moneda + venta.iva
                z3.textContent = "Total: " + venta.moneda + venta.total
                t.textContent = "____________________________________"
        
                listaventa.appendChild(v)
                listaventa.appendChild(w)
                listaventa.appendChild(x)
                listaventa.appendChild(y)
                listaventa.appendChild(z)
                listaventa.appendChild(z2)
                listaventa.appendChild(z3)
                listaventa.appendChild(t)
             
               
                })
                
                
        
            }
            sincronizarV();
        
        }



     const agregarProducto = (evt) =>{
            evt.preventDefault();
            
            const codigoP = document.querySelector('#codprod').value;
            const nombreP = document.querySelector('#nomprod').value;
            const familiaP = document.querySelector('#famprod').value;
            const monedaP = document.querySelector('#monprod').value
            const precioP = document.querySelector('#preprod').value;
          
            
            
            const objproducto  = {
            codigo: codigoP,
            nombre: nombreP,
            familia: familiaP,
            moneda: monedaP,
            precio: precioP,
   
            }
            
            productos.push(objproducto);
         
            
            
            if(codigoP == '' || nombreP == '' || familiaP == '' || monedaP == '' ||  precioP == ''){
                mostrarError('Debe completar todos los datos')
                return              
            }
            
            mostrarP();
            regproductos.reset();
            
            }

     const agregarCliente = (evt) => {
                evt.preventDefault()
                const clcodigo = document.querySelector('#codigoCl').value;
                const clnomb = document.querySelector('#nombreCl').value;
                const clapell = document.querySelector('#apellidoCl').value;
                const cldir = document.querySelector('#direccionCl').value;
                const cltel = document.querySelector('#telefonoCl').value;
                const clemail = document.querySelector('#emailCl').value;
        
             
                const objcliente={
                    id: clcodigo,
                    Nombre: clnomb,
                    Apellido: clapell,
                    Direccion: cldir,
                    Telefono: cltel,
                    Email: clemail
            
                    }
                   clientes.push(objcliente)
            
        
                if(clcodigo == '' || clnomb == '' || clapell == '' || cldir == '' || cltel =='' || clemail ==''){
                    mostrarError('Debe completar todos los datos')
                    return  
                    
                }
        
           
        
                mostrarC()
                registro.reset();
        
            
               
              
            }

     const agregarUsuario = (evt) =>{
         evt.preventDefault;
         const nomUsuario = document.querySelector('#nomusu').value;
         const apeUsuario = document.querySelector('#apeusu').value;
         const logUsuario = document.querySelector('#logusu').value;
         const clavUsuario = document.querySelector('#claveusu').value;


         const objUsuarios = {
             Nombre: nomUsuario,
             Apellido: apeUsuario,
             usuario: logUsuario,
             clave: clavUsuario,
          }

          usuarios.push(objUsuarios);
          

          if(nomUsuario == '' || apeUsuario == '' || logUsuario == '' ||  clavUsuario == ''){
             mostrarError('Debe completar todos los datos')
             return              
         }

         mostrarU();
         regusuario.reset()


     }


     const agregarVenta = (evt) =>{
        evt.preventDefault();
        
        const comprobanteV = document.querySelector('#compventa').value
        const codigoCV  = document.querySelector('#codigoCliente').value
        const clienteV = document.querySelector('#clienteventa').value;
        const monedaV = document.querySelector('#monventa').value;
        const totalV = document.querySelector('#total').value
        const subtot = document.querySelector('#base').value
        const ivav = document.querySelector('#iva').value
        

        const cantidad1 = document.querySelector("#cant1").value
        const articulo1 = document.querySelector("#art1").value
        const valor1 = document.querySelector('#val1').value
        const total1 = document.querySelector("#tot1").value

        const cantidad2 = document.querySelector("#cant2").value
        const articulo2 = document.querySelector("#art2").value
        const valor2 = document.querySelector('#val2').value
        const total2 = document.querySelector("#tot2").value

        const cantidad3 = document.querySelector("#cant3").value
        const articulo3 = document.querySelector("#art3").value
        const valor3 = document.querySelector('#val3').value
        const total3 = document.querySelector("#tot3").value
    
        
        
        
        const objventa  = {
        codigoCliente: codigoCV,    
        cliente: clienteV,
        moneda: monedaV,
        total: totalV,
        comprobante: comprobanteV,
        subtotal: subtot,
        iva: ivav,

        cant1: cantidad1,
        art1: articulo1,
        val1: valor1,
        tot1: total1,

        cant2: cantidad2,
        art2: articulo2,
        val2: valor2,
        tot2: total2,
        
        cant3: cantidad3,
        art3: articulo3,
        val3: valor3,
        tot3: total3,
        }
        
        ventas.push(objventa);
       
        
        
        if(codigoCV =='' || clienteV == '' || monedaV == '' || totalV == '' || comprobanteV == ''){
            mostrarError('Debe completar todos los datos')
            return              
        }
        
        mostrarV();
        registroventa.reset();
        
        }


        const setEvents = () => {
            document.querySelectorAll("input").forEach(el => {
                el.removeEventListener("keyup", calcularFila1);
                el.addEventListener("keyup", calcularFila1);

                el.removeEventListener("keyup", calcularFila2);
                el.addEventListener("keyup", calcularFila2);

                el.removeEventListener("keyup", calcularFila3);
                el.addEventListener("keyup", calcularFila3);

                el.removeEventListener("keyup", calcularTotal);
                el.addEventListener("keyup", calcularTotal);

            });
        };
        setEvents();
        
        function calcularFila1() {
            var cant1 = document.getElementById('cant1').value; 
            var val1 = document.getElementById('val1').value;
            var tot1 = document.getElementById('tot1'); 
            var total1 = cant1 * val1;
            tot1.value = total1
        }
        function calcularFila2() {
            var cant2 = document.getElementById('cant2').value; 
            var val2 = document.getElementById('val2').value;
            var tot2 = document.getElementById('tot2'); 
            var total2 = cant2 * val2;
            tot2.value = total2
        }

        function calcularFila3() {
            var cant3 = document.getElementById('cant3').value; 
            var val3 = document.getElementById('val3').value;
            var tot3 = document.getElementById('tot3'); 
            var total3 = cant3 * val3;
            tot3.value = total3
        }
                 
        function calcularTotal() {
           var imp = 0.22
           var subtot1 = document.getElementById('tot1').value
           var subtot2 = document.getElementById('tot2').value
           var subtot3 = document.getElementById('tot3').value
           var base = document.getElementById('base')

           var subtotal = parseInt(subtot1) + parseInt(subtot2)  + parseInt(subtot3)
           base.value = subtotal

            
           var valoriva = document.getElementById('base').value
           var iva = document.getElementById('iva')     
       
           iva.value = valoriva * imp

           var subtotal = document.getElementById('base').value
           var iva = document.getElementById('iva').value
           var total = document.getElementById('total')

           total.value = parseInt(subtotal)  + parseInt(iva)

        }






        let btnClientes = document.querySelector('#btncliente');
        

        btnClientes.addEventListener('click', ()=>{
            fetch("../pages/cliente.json")
            .then((res)=>{

                   return res.json() 
            })          
                        
           .then((clientes)=>{ 
            
            renderClientes(clientes)


           })    
           .catch((err)=>console.log(err))

        })


           function renderClientes(Listaclientes){
            const datos = document.querySelector('#dato');
            let html = "";

            Listaclientes.forEach(cliente=>{

             html +=   `
                <div class= "mostrarjson"> 
                
                <h3><STRONG>ID:</STRONG> ${cliente.id}</h3>
                <h3><STRONG>Nombre:</STRONG> ${cliente.Nombre}</h3>
                <h3><STRONG>Telefono:</STRONG> ${cliente.Telefono}</h3>
                <h3><STRONG>Direccion:</STRONG> ${cliente.Direccion}</h3>
                <h3 class="deuda"><STRONG>Deuda:</STRONG> ${cliente.Credito}</h3>
                               
                </div>      
              
                `

            });
            datos.innerHTML = html;



           }

       



   

    regusuario.addEventListener('submit', agregarUsuario);
    registro.addEventListener('submit', agregarCliente);   
    regproductos.addEventListener('submit', agregarProducto);
    registroventa.addEventListener('submit', agregarVenta);












    




