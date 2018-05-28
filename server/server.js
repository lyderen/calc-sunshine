const express = require('express');
const bodyParser = require('body-parser');
const SunCalc = require('suncalc');

const port = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());


//1527202356867
//32.0880577
//34.8672868

//getingsunshinetimeaccordinglocation/date=123444,lat=2452323,lan=2323523

app.get('/', (req,res) => {
  res.send('<h1> woelcom to sunshine <h1> <p> u must send time langtidiu & longtediuo and u get the sunshuine time <p>');
});

app.post('/getingsunshinetimeaccordinglocation', (req,res) => {
  
    const clientTime = req.body.time;
    const time = new Date(clientTime);
     const lat = parseFloat (req.body.lat);
     const lan = parseFloat(req.body.lan);
const body = req.body;
console.log(req);
console.log(body);
   const  times = SunCalc.getTimes(new Date(clientTime),lat,lan);
  const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  const sunsetstr = times.sunset.getHours() + ':' + times.sunset.getMinutes();
  
   res.send({body});

});


app.listen(port, () =>{
    console.log(`App strating on port ${port}`);
  });