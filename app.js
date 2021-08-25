const express = require('express');
const app = express()
const port = 3000;
const axios = require('axios').default;
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");

})
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`server is working`)
})
app.use(express.urlencoded({extended: true}));

app.post("/" , (request, response) =>{
 const countryName = request.body.countryName;
 axios.get(`https://corona.lmao.ninja/v2/countries/${countryName}?yesterday`)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {

    console.log(error);
  })
  .then(function (response) {
    console.log(response)
  });
  axios.post('/', {
    firstName: 'countryName',
    lastName: 'countryName'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})


