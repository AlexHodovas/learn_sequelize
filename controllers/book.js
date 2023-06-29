const createNewBook = async (Book) => {
  try {
    const result = await Book.create({
      title: "Clean Code",
      author: "Robert Cecil Martin",
      release_date: "2021-12-14",
      subject: 3,
    });

    console.log(result);
  } catch (error) {
    console.error("Failed to create a new record : ", error);
  }
};

const findAllBooks = async (Book) => {
  try {
    const result = await Book.findAll();

    console.log(result);
  } catch (error) {
    console.error("Failed to retrieve data : ", error);
  }
};

const findOneBookById = async (Book, id = "1") => {
  try {
    const result = await Book.findOne({
      where: {
        id,
      },
    });

    console.log(result);
  } catch (error) {
    console.error("Failed findOneBookById: ", error);
  }
};

const destroyOneBookById = async (Book, id) => {
  try {
    if (!id) return;

    const result = Book.destroy({
      where: { id },
    });

    console.log("Successfully deleted record. result", result);
  } catch (error) {
    console.error("Failed to delete record : ", error);
  }
};

module.exports = {
  createNewBook,
  findAllBooks,
  findOneBookById,
  destroyOneBookById,
};
