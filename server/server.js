require ('./config/config')
const express = require('express')
const app = express()
 
app.get('/usuario', function (req, res) {
  res.json('get usuario')
});
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.post('/usuario', function (req, res) {
//     //paquete para obtener bodyparser
//     let body = req.body;
//     console.log(body);
//     res.json({
//         body
//     })
// })
// POST /login gets urlencoded bodies
app.post('/usuario', urlencodedParser, function (req, res) {
    let body = req.body;
    res.json({
        body
    })
  })
app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id

    })
    return res;
})
app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
})

app.listen(process.env.PORT,()=>{
    console.log(`Escuchando puerto ${process.env.PORT} `);
})