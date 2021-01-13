const request = require('request')
const uri = "http://api.openweathermap.org/geo/1.0/direct";
const appid = "32d7232e237fccd3db68c7fb205aa228";



const get_geocode = (location , callback) => {

  

    request({
        url: uri ,
        json : true ,
        qs : {
            q : location ,
            APPID : appid
        }
    } , (error, response) => {
       
        if(error)
        {
            callback("Weather connection refused to connect" , undefined )
        }
        else if (response.body.length===0 || response.body.message)
        {
            callback("Location cannot be found" , undefined)
        }
        else {
            callback( undefined , response.body[0])
        }

       
    }) 

}

module.exports = get_geocode;