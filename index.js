const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) => res.send('HelloWorld!') )


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))