function Leer() {
    const ciudad = document.getElementById("input").value;
    const key = '32f8dd88c90cd07cf7953cc26459fa6f';
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}&units=metric`
    buscar2(api_url);
}

function buscar1(api_url) {

    fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado => {
            //console.log(resultado);

            //console.log(resultado.main)
           // document.getElementById("lista").innerHTML = `<h1>Temperatura actual = ${resultado.main.temp} °C</h1>`;
           // document.getElementById("lista").innerHTML += `<h1>Temperatura Maxima = ${resultado.main.temp_max} °C</h1>`;
          //  document.getElementById("lista").innerHTML += `<h1>Temperatura Minima = ${resultado.main.temp_min} °C</h1>`;

        });


}

const buscar2 = async(api_url) => {

    const data = await fetch(api_url);
    const respuesta = await data.json();
    const Search = await respuesta.main;
    //console.log(data)
   // console.log(respuesta)
    //console.log(Search)
    //console.log(Search.temp);

    document.getElementById("lista").innerHTML = `<h1>Temperatura actual = ${Search.temp} °C</h1>`;
    document.getElementById("lista").innerHTML += `<h1>Temperatura Maxima = ${Search.temp_max} °C</h1>`;
    document.getElementById("lista").innerHTML += `<h1>Temperatura Minima = ${Search.temp_min} °C</h1>`;
}


const buscar3 = async(api_url) => {

    const respuesta = await axios(api_url);
    const Search = await respuesta.main;
    console.log(respuesta.main);

    console.log(Search);

}