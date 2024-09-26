const db = require("../config/database.js");
  
// Get All Clients from DB
const getContracts = (result) => {

    db.connect((err) => {
        if (err) {
          console.error('Error al conectar a la base de datos:', err);
          return;
        }
        console.log('Conexión exitosa a la base de datos MySQL!');
        // Aquí puedes realizar consultas y operaciones con la base de datos
      });


    db.query("SELECT * FROM clientes_contratos", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

const getContractsByDates = (data, result) => {

    db.connect((err) => {
        if (err) {
          console.error('Error al conectar a la base de datos:', err);
          return;
        }
        console.log('Conexión exitosa a la base de datos MySQL!');
        // Aquí puedes realizar consultas y operaciones con la base de datos
      });


    let datos = data.split(',');
    //console.log('SELECT * FROM clientes_contratos WHERE (fecha_con BETWEEN "' + datos[0] + '" AND "' + datos[1] +'")');
    db.query('SELECT * FROM clientes_contratos WHERE (fecha_con BETWEEN "' + datos[0] + '" AND "' + datos[1] +'")', (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


module.exports = 
{
    getContracts,
    getContractsByDates
};