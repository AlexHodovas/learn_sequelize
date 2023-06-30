const createGradeTable = (sequelize, DataTypes) => {
  const Grade = sequelize.define("grades", {
    grade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Grade;
};

module.exports = {
  createGradeTable,
};
