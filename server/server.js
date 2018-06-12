const express = require('express');
const bodyParser = require('body-parser');
const SunCalc = require('suncalc');

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', (req,res) => {
  res.send('<h1> woelcom to sunshine <h1> <p> u must send time langtidiu & longtediuo and u get the sunshuine time <p>');
});

app.get('/getingsunshinetimeaccordinglocation/:time/:lat/:lan', (req,res) => {
    // req.params.time
   const clientTime = parseInt(req.params.time);
    const time = parseInt(req.params.time);
     const lat = parseFloat(req.params.lat);
     const lan = parseFloat(req.params.lan);

console.log(time,lat,lan);
   const  times = SunCalc.getTimes(new Date(clientTime),lat,lan);
  const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  const sunsetstr = times.sunset.getHours() + ':' + times.sunset.getMinutes();
   
  res.send({times,sunriseStr,sunsetstr});
});


app.listen(port, () =>{
    console.log(`App strating on port ${port}`);
  })