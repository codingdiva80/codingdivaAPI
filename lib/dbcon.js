const mysql = require("mysql");

async function query(q){
  return new Promise( (resolve) => {
    const pool = mysql.createPool({
      connectionLimit: 10,
      host: 'us-cdbr-iron-east-01.cleardb.net',
      user: 'b99ffc482d9011',
      database: 'heroku_63dfc4a4ec1bd29',
      password: '097d719c' 
    });

    pool.getConnection(function(err, connection){
      if(err) { throw err; }
      connection.query(q, function(error, result){
        connection.release();
        if(error){ throw error; }
        resolve(result);
      })
    });

  });

}

module.exports = query;