import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

export const db = mysql.createPool({
  host: process.env.DB_HOST, // ejemplo: "mysql123.hostinger.com"
  user: process.env.DB_USER, // tu usuario de Hostinger
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 3306, // asegúrate de incluir el puerto
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
