const db = require("../config/database.js");
  
// Get All Clients from DB
const getClients = (result) => {

    db.connect((err) => {
        if (err) {
          console.error('Error al conectar a la base de datos:', err);
          return;
        }
        console.log('Conexión exitosa a la base de datos MySQL!');
        // Aquí puedes realizar consultas y operaciones con la base de datos
      });


    db.query("SELECT * FROM clientes", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

module.exports = getClients;