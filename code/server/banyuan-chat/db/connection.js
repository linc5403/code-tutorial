var mysql      = require('mysql2');


let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'banyuan',
  password : 'asdf1234',
  database : 'chat'
});


connection.connect();

module.exports = {
    connection
}
