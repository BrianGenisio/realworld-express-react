const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("conduit", "root", "1234", {
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log(`DB Connected`);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

checkConnection();

module.exports = sequelize;
