import { DataSource } from "typeorm";
import { Book } from "./entities/Book.entity";

export const mysql_context = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [Book],
  subscribers: [],
  migrations: [],
})