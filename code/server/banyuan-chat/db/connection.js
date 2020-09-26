var mysql      = require('mysql');


let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tyctyc19920120',
  database : 'chat'
});
 

connection.connect();
 
module.exports = {
    connection
}