const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const students = [{name: 'Chuck', id: 1, age: 12, grades: [90, 80, 80, 90]},
                {name: 'Alex', id: 2, age: 12, grades: [90, 80, 80, 90]},
                {name: 'James', id: 3, age: 11, grades: [90, 80, 80, 90]},
                {name: 'Lizzy', id: 4, age: 13, grades: [100, 100, 100, 100]},
                {name: 'Ally', id: 5, age: 15, grades: [90, 80, 80, 90]}
            
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

//POST /grades - records a new grade, returns success status in JSON response

//POST /register - creates a new user, returns success status in JSON response


const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))