const { grade_data } = require("../dataExamples");

const addExampleDataToGradeTable = async (Grade) => {
  try {
    const res = await Grade.bulkCreate(grade_data, { validate: true });

    return res;
  } catch (error) {
    console.log("addExampleDataToGradeTable error", error);
  }
};

module.exports = {
  addExampleDataToGradeTable,
};
