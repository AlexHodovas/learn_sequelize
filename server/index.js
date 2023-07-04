const express = require("express");
const { Sequelize, DataTypes } = require("sequelize");

const app = express();
const { DB_NAMES, DB_PASSWORD } = require("../constants");
const { createBookTable } = require("../models/book");
const { createStudentsTable } = require("../models/students");
const { createGradeTable } = require("../models/grade");
const { createUserTable } = require("../models/user");

const {
  createNewBook,
  findAllBooks,
  findOneBookById,
} = require("../controllers/book");
const { addExampleDataToGradeTable } = require("../controllers/grade");
const { addExampleDataToStudentTable } = require("../controllers/students");

const sequelize = new Sequelize(DB_NAMES.student_db, "root", DB_PASSWORD, {
  host: "127.0.0.1",
  dialect: "mysql",
});

const initSequelize = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

initSequelize();

// const Book = createBookTable(sequelize, DataTypes);
const Student = createStudentsTable(sequelize, DataTypes);
const Grade = createGradeTable(sequelize, DataTypes);
const User = createUserTable(sequelize, DataTypes);

// One-To-One association
Student.belongsTo(Grade);

sequelize
  .sync() // { force: true }
  .then(async () => {
    try {
      // await addExampleDataToGradeTable(Grade);
      // await addExampleDataToStudentTable(Student, Grade);
    } catch (error) {
      console.error("Failed to retrieve data : ", error);
    }
  })
  .catch((error) => {
    console.error("Unable to create the table : ", error);
  });

app.listen("3000", "localhost", (error) => {
  error ? console.log(error) : console.log(`listening port 3000`);
});

console.log("sequelize.models", sequelize.models);
