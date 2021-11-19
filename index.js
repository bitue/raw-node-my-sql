const mysql = require('mysql');
const http = require('http')

const dataBaseConfig ={
    host:'localhost',
    user:'root',
    password:'',
    database:'school3'
}


const connection = mysql.createConnection(dataBaseConfig);

connection.connect((err)=> {
    if(err){
        console.log('failed')
    }
    else{
        console.log('success');
       
        // deleteFunc(connection)
        //updataData(connection)
        // deleteData(connection)
        
        selectData(connection);
        // insertData(connection)


    }
})



function insertData (con) {
    const sqlQuery = "INSERT INTO `students`( `name`, `city`, `phone`, `father`) VALUES ('bitue','chittagong', '01111', 'mmmm')";
    con.query(sqlQuery , (err)=> {
        if(err){
            console.log(err.message)

        }
        else{
            console.log('inserted done')
        }
       
    })

}




function updataData (con) {
    const sqlQuery = "UPDATE `students` SET `phone`='500' WHERE id='2'"
    con.query(sqlQuery , (err)=> {
        if(err){
            console.log(err.message)

        }
        else{
            console.log('inserted done')
        }
       
    })

}


function deleteData (con) {
    const sqlQuery = "DELETE FROM `students` WHERE id='2'"
    con.query(sqlQuery , (err)=> {
        if(err){
            console.log(err.message)

        }
        else{
            console.log('deleted done')
        }
       
    })

}


function selectData(con) {
    const sqlQuery ="SELECT `id`, `name`, `city`, `phone`, `father` FROM `students` WHERE id='7'"
    con.query(sqlQuery, (err, result)=> {
        if(err){
            console.log(err.message)
        }
        else{
            console.log(result)
        }
    })
    
}




