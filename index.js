const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const students = [{name: 'Chuck', id: 1, email:'chuck@gmail.com', age: 12, grades: [90, 80, 80, 90]},
                {name: 'Alex', id: 2, email:'alex@gmail.com', age: 12, grades: [90, 80, 80, 90]},
                {name: 'James', id: 3, email:'james@gmail.com', age: 11, grades: [90, 80, 80, 90]},
                {name: 'Lizzy', id: 4, email:'lizzy@gmail.com', age: 13, grades: [100, 100, 100, 100]},
                {name: 'Ally', id: 5, email:'ally@gmail.com', age: 15, grades: [90, 80, 80, 90]}
            
]

//GET /students - returns a list of all students
app.get('/students', (req,res) =>{
    res.send(students) 
} )

//GET /students/:studentId - returns details of a specific student by student id
app.get('/students/:studentID', (req,res) =>{
    let studentID = req.params.studentID
    let student = students.find(each => each.id === parseInt(studentID))
    res.send(student) 
} )

//GET /grades/:studentId - returns all grades for a given student by student id
app.get('/grades/:studentID', (req,res) => {
    console.log('recieved request')
    let studentID = req.params.studentID
    let student = students.find(each => each.id === parseInt(studentID))
    res.send(student.grades)  
})

//POST /grades - records a new grade, returns success status in JSON response
app.post('/grades', (req, res) => {
    /* POST user data using the request body */
    if(req.body.id && req.body.grade){
        res.status(200).send(`User ${req.body.id} grade added`)

    }else{
        res.status(400).send(`User ${req.body.id} grade not added`)
    }
})

//POST /register - creates a new user, returns success status in JSON response
app.post('/register', (req, res) => {
    /* POST user data using the request body */
    if(req.body.name && req.body.email){
        res.status(200).send(`User ${req.body.name} registered`)

    }else{
        res.status(400).send(`User ${req.body.name} not registered`)
    }
})


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))