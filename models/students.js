const createStudentsTable = (sequelize, DataTypes) => {
  const Students = sequelize.define("students", {
    student_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Students;
};

module.exports = {
  createStudentsTable,
};
