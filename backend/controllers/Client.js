const getClients = require("../models/clientModel.js");
  
// Get All Clients from DB
const getClientsDB = (req, res) => {
    getClients((err, results) => {
        if (err){
            console.log("EEE");
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

module.exports = getClientsDB;