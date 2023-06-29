const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const { createBookTable } = require("../models/book");
const {
  createNewBook,
  findAllBooks,
  findOneBookById,
} = require("../controllers/book");

const sequelize = new Sequelize("hello_world_db", "root", "123456789", {
  host: "127.0.0.1",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const Book = createBookTable(sequelize, DataTypes);

sequelize
  .sync()
  .then(() => {
    console.log("Book table created successfully!");
    // createNewBook(Book);
    // findAllBooks(Book);
    findOneBookById(Book);
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });

app.listen("3000", "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port 3000`);
});
