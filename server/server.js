const express = require('express');
const bodyParser = require('body-parser');
const SunCalc = require('suncalc');

const app = express();
app.use(bodyParser.json());


//1527202356867
//32.0880577
//34.8672868

//getingsunshinetimeaccordinglocation/date=123444,lat=2452323,lan=2323523

app.get('/getingsunshinetimeaccordinglocation/:date/:lat/:lon', (req,res) => {

  const time = parseInt(req.params.date);
  const lat = parseInt(req.params.lat);
  
  const lon = parseInt(req.params.lon);

  const  times = SunCalc.getTimes(new Date(time),lat,lon);
  const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  const sunsetstr = times.sunset.getHours() + ':' + times.sunset.getMinutes();
  console.log(sunriseStr)
   res.send({sunriseStr,sunsetstr})


});


app.listen(3000, () =>{
    console.log('App strating on port 3000');
  });