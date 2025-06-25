const apiKey = "09a94a40ed6ef2cef3cdb2da5d115ce0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=&units=metric&appid=";

async function checkweather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)
    
    document.querySelector(".city").innerHTML = data
}

/*let clima = {
    apiKey: "09a94a40ed6ef2cef3cdb2da5d115ce0",
    fetchClima:function(ciudad){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + ciudad
            +"&units=metric&appid="
            +this.apiKey
        )
        .then((response)=>{
            return response.json();
        })
        .then((data)=>this.mostrarClima(data));
    },
    mostrarClima:function(data){
        const {temp} = data.main;
        document.querySelector("#temp").innerHTML = temp + " &#8451";
    }
}

let ciudad = document.querySelector("#ciudad")
ciudad.addEventListener("change", function(){
    clima.fetchClima(ciudad.value)
})

clima.fetchClima("clima")
*/