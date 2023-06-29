const createBookTable = (sequelize, DataTypes) => {
  const Book = sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
    },
    subject: {
      type: DataTypes.INTEGER,
    },
  });

  return Book;
};

module.exports = {
  createBookTable,
};
