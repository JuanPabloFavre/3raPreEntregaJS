
function calcularprestamo(){
    const total = document.getElementById('totalprestamo').value
    const cuotas = document.getElementById('cuotas').value

    const resultado = document.getElementById('cuotasprestamo')
    const interesapagar = document.getElementById('interes')
    const totalapagar = document.getElementById('totalapagar')

    const interes1 = 0.34;
    const interes2 = 0.43;
    const interes3= 0.57;
    const interes4 = 0.64;
    const interes5 = 0.72;

    if(cuotas == 6){

        const prestamo = total / cuotas * interes1 
        resultado.value = new Intl.NumberFormat('es-MX').format(prestamo.toFixed(0))
    
        const calcint = interes1
        interesapagar.value = (calcint * 100).toFixed(0)
    
        const totalpres = parseInt(total) + (parseInt(total) * interes1)
        totalapagar.value = new Intl.NumberFormat('es-MX').format(totalpres)

    }else if (cuotas == 12){

        const prestamo = total / cuotas * interes2 
        resultado.value = new Intl.NumberFormat('es-MX').format(prestamo.toFixed(0))
    
        const calcint = interes2
        interesapagar.value = (calcint * 100).toFixed(0)
    
        const totalpres = parseInt(total) + (parseInt(total) * interes2)
        totalapagar.value = new Intl.NumberFormat('es-MX').format(totalpres)
        
    }else if(cuotas == 18){

        const prestamo = total / cuotas * interes3 
        resultado.value = new Intl.NumberFormat('es-MX').format(prestamo.toFixed(0))
    
        const calcint = interes3
        interesapagar.value = (calcint * 100).toFixed(0)
    
        const totalpres = parseInt(total) + (parseInt(total) * interes3)
        totalapagar.value = new Intl.NumberFormat('es-MX').format(totalpres)

    }else if(cuotas == 24){
        const prestamo = total / cuotas * interes4 
        resultado.value = new Intl.NumberFormat('es-MX').format(prestamo.toFixed(0))
    
        const calcint = interes4
        interesapagar.value = (calcint * 100).toFixed(0)
    
        const totalpres = parseInt(total) + (parseInt(total) * interes4)
        totalapagar.value = new Intl.NumberFormat('es-MX').format(totalpres)

    }else{

        const prestamo = total / cuotas * interes5 
        resultado.value = new Intl.NumberFormat('es-MX').format(prestamo.toFixed(0))
    
        const calcint = interes5
        interesapagar.value = (calcint * 100).toFixed(0)
    
        const totalpres = parseInt(total) + (parseInt(total) * interes5)
        totalapagar.value = new Intl.NumberFormat('es-MX').format(totalpres)
    }

 

}


function ingresar(){

    window.location=("./login.html")
}


        const btn = document.querySelector('#btn')

        btn.addEventListener('click', () => {
            const key = "0ca063b746578ffb14d9f9455bdb165a";
            let ciudad = document.querySelector('#ciudad').value;
            ciudad = encodeURIComponent(ciudad)

            if (ciudad != "") {
                let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
                
                fetch(url)
                    .then(res => {
                        return res.json()
                    })
                    .then(clima => {
                        console.log(clima)
                        let temp = clima.main.temp
                        let viento = clima.wind.speed
                        let pais = clima.sys.country

                        t = temp - 273.15
                        let html = document.querySelector('#temperatura')
                        html.value =  t.toFixed(0) + "º Celsius"

                        v = viento
                        let html2 = document.querySelector('#viento')
                        html2.value =  v.toFixed(2) + "Km/h"

                        p = pais
                        let html3 = document.querySelector('#pais')
                        html3.value =  p 

                        
                        if (temp2 < 10) {
                            html.className = "cold"
                        } else {
                            html.className = "warm"
                        }
                    })
                    .catch( err => {
                        console.log(err);
                    })
            }

        })



       
         
        
      
         