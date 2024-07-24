var mysql = require('mysql');

var con = mysql.createConnection({
  host: "",
  user: "",
  password: "",
  database:""
});
console.log('connection')
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
module.exports=con;
