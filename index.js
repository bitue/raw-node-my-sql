const mysql = require('mysql');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json())



const dataBaseConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'school3'
}




const connection = mysql.createConnection(dataBaseConfig);

connection.connect((err) => {
    if (err) {
        console.log('failed')
    }
    else {
        console.log('success');

        // deleteFunc(connection)
        //updataData(connection)
        // deleteData(connection)


        // ---------------ALL OF THE THING IS DONE BY THIS WAY FOR SQL CRUD------------------------------

        app.get('/select', (req, res) => {
            const sqlQuery = "SELECT * FROM `students`"
            connection.query(sqlQuery, (err, result) => {
                if (err) {
                    console.log(err.message)
                }
                else {
                    res.send(result);
                }
            })

        })

        // selectData(connection);
        // insertData(connection)


    }
})



function insertData(con) {
    const sqlQuery = "INSERT INTO `students`( `name`, `city`, `phone`, `father`) VALUES ('bitue','chittagong', '01111', 'mmmm')";
    con.query(sqlQuery, (err) => {
        if (err) {
            console.log(err.message)

        }
        else {
            console.log('inserted done')
        }

    })

}




function updataData(con) {
    const sqlQuery = "UPDATE `students` SET `phone`='500' WHERE id='2'"
    con.query(sqlQuery, (err) => {
        if (err) {
            console.log(err.message)

        }
        else {
            console.log('inserted done')
        }

    })

}


function deleteData(con) {
    const sqlQuery = "DELETE FROM `students` WHERE id='2'"
    con.query(sqlQuery, (err) => {
        if (err) {
            console.log(err.message)

        }
        else {
            console.log('deleted done')
        }

    })

}


function selectData(con) {
    const sqlQuery = "SELECT * FROM `students`"
    con.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err.message)
        }
        else {
            console.log(result)
            return result
        }
    })

}


app.get('/', (req, res) => {
    res.send('i am runnuing')
})

app.listen(5001, () => {
    console.log('app is running at prot', 5001)
})








