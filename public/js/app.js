const URL = "http://localhost:3000";

const form = document.querySelector('form');
const target = document.querySelector('p');
const search = document.querySelector('input');
console.log(form);
form.addEventListener('submit' , (event) => {
    event.preventDefault();
    const location = search.value;

    fetch("/weather?address="+location).then((response) => {
        // console.log(response);
        response.json().then((data) => {
            // console.log(data);
        if(data.error)
        {
            target.innerHTML = `<h3>Error : ${data.error}</h3>`
        }
        else
        {
            target.innerHTML = `The temperature at ${location} is ${data.main.temp} <br> 
            It feels like ${data.weather[0].description}`
        }
    })}).catch((error) => {
        console.log(error);
    })
    // fetch('')
})