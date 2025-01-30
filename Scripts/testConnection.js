const mysql = require("mysql2"); // O usa 'mysql' si prefieres

// Configura tu conexión a la base de datos
const connection = mysql.createConnection({
  host: "Hostinger",
  user: "u564660586_Denkitive",
  password: "Logus_SL23",
  database: "u564660586_Logus",
  port: 3306, // El puerto por defecto de MySQL
});

// Intenta conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar a la base de datos:", err);
    return;
  }
  console.log("Conexión a la base de datos exitosa!");

  // Cierra la conexión
  connection.end();
});
