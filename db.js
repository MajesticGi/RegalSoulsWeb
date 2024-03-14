const { Pool } = require('pg');

const pool = new Pool({
   
   connectionString:"postgres://gsite_frxm_user:T4e8MbTsbY7Gk5VdJ2FYFFnlfL3fKuvi@dpg-cnp9nhv79t8c73b76870-a.oregon-postgres.render.com/gsite_frxm",
    
   ssl:{
    rejectUnauthorized:false
   }
   // host:"localhost",
    // port:5432,
    // password:"8896",
    // database:"gsite",
    // user:"playabook"
});



module.exports = pool;
