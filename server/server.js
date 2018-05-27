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

app.get('/getingsunshinetimeaccordinglocation', (req,res) => {
  
    const clientTime = parseFloat(req.body.time);
    const time = new Date(clientTime);
     const lat = req.body.lat;
     const lan = req.body.lan;
    
     var a = new Date();
     var b = new Date().getTimezoneOffset();
    console.log(b);
  console.log(a.getUTCHours);
  // const time = parseInt(req.params.date);
  // const lat = parseInt(req.params.lat);
  //a.getFullYear(),a.getMonth(),a.getDate() + 1
  // const lon = parseInt(req.params.lon);
  console.log(a.getFullYear());
  console.log(a.getMonth() + 1);
  console.log(a.getDate());
  console.log(new Date(a.getFullYear(),a.getMonth() + 1,a.getDate()));
   const  times = SunCalc.getTimes(new Date(2018,4,28),32.0880577,34.8672868);
  const sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes();
  const sunsetstr = times.sunset.getHours() + ':' + times.sunset.getMinutes();
  // console.log(sunriseStr)
   res.send({times,sunriseStr,sunsetstr})


});


app.listen(port, () =>{
    console.log(`App strating on port ${port}`);
  });