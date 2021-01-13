const express= require("express");
const path = require('path');
const hbs = require('hbs');
const get_weather = require("./utils/WeatherStatus");

// console.log(__dirname);
// console.log(__filename);

const app = express();
// Path storing values
const viewsDir = path.join(__dirname , '../templates/views');
const partialPath = path.join(__dirname , '../templates/partialHBS');
const dir = path.join(__dirname , '../public')

// Configuring of express and handlebars
app.set('view engine' ,'hbs')
app.set('views' , viewsDir );
hbs.registerPartials(partialPath);


//Server side information 
app.use(express.static(dir));
app.get('' , (req,res) => {
    res.render('index' , {
        title : "Main",
        name : "Shivam"
    })
})
 

app.get('/help' , (req , res ) => {
    res.render('help' , {
        title : "Help" ,
        name :'Shivam'
    });
})
app.get('/about' , (req ,res ) => {
    res.render('about' , {
        title : "About Me" ,
        name : "Shivam"
    }) 
})

app.get('/help/*' , (req ,res) => {
    res.render('error' , {
        errMess: "Help article not found" ,
        title :  "ERROR 404" ,
        name : "Shivam"
    })
})
app.get('/weather' , (req , res ) => {
    if(!req.query.address) {
        return (res.send({
            error : "You must provide an address to continue",
        }));   
    }
    get_weather(req.query.address , (response) => {
        res.send(response);
    }, res)
    }
)

app.get('*' , (req , res ) => {
    res.render('error' , {
        errMess : "404 Page Not Found" ,
        title : "ERROR 404" ,
        name : "Shivam"
    })
})
app.listen(3000);
