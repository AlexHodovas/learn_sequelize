const { student_data } = require("../dataExamples");

const addExampleDataToStudentTable = async (Student, Grade) => {
  try {
    const res = await Student.bulkCreate(student_data, { validate: true });
    console.log("addExampleDataToGradeTable res", res);

    const res2 = await Student.findAll({
      include: [
        {
          model: Grade,
        },
      ],
    });
    console.log("addExampleDataToGradeTable res2", res2);

    return res2;
  } catch (error) {
    console.log("addExampleDataToGradeTable error", error);
  }
};

module.exports = {
  addExampleDataToStudentTable,
};
