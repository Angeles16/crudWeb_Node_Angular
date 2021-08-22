import mysql from 'promise-mysql';

import llave from './llaves';

const pool = mysql.createPool(llave.database);

pool.getConnection()
    .then(connection => {
      pool.releaseConnection(connection);
        console.log('Base de datos conectada');

    });

export default pool;