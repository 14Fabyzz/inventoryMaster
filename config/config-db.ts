import mysql from 'mysql2';
import dotenv from "dotenv";
dotenv.config();


const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT || '3307'),
    connectionLimit: 10,
    queueLimit: 0
  });
  
  // Verificar la conexión
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("✅ Conexión exitosa a la base de datos.");
    connection.release(); // Liberar la conexión
  }
});

export default db.promise()
