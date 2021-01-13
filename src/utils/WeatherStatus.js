const request = require('request')
const get_geocode = require('./geocode')
const url = "http://api.openweathermap.org/data/2.5/weather";
const appid = "32d7232e237fccd3db68c7fb205aa228";


const get_weather = (location , callback , res) => {

    get_geocode(location , (error , response) => {
        if(error)
        {
            res.send({
                error : error
            })
            
        }
        else 
        {
            request({
            url : url ,
            json : true ,
            qs : {
                lon : response.lon ,
                lat : response.lat ,
                appid : appid,
                
            }
        } , (error , response , body) => {

            if(error)
            {
                console.log("check your internet connection")
            }
            else
            {
            callback(response.body);
            }
        })
        }
    })
}

module.exports = get_weather;