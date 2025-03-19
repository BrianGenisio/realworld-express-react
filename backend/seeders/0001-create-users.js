"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const users = [
        {
            username: "Author",
            email: "author@example.com",
            password: "$2b$10$UQmgyFsLE7b/1SeSQd6KseSioodw6NYYCUNHzkP8KNhqSL7JM0Abm",
        },
        {
            username: "Reader",
            email: "reader@example.com",
            password: "$2b$10$e6GuhICk7yGGeX0DHxgPFe6xU/ZoCAOs5WGHpf1w6YaIeRTOQRmSC",
        }
    ]
    
    await queryInterface.bulkInsert("Users", users, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
