"use strict";

const User = require("../models/User");
const Article = require("../models/Article");
const Tag = require("../models/Tag");
const Comment = require("../models/Comment");
const sequelize = require("../util/database");
const relationships = require("../models/relationships");

module.exports = {
    async up(queryInterface, Sequelize) {
        await sequelize.sync({ force: true })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Users");
        await queryInterface.dropTable("Articles");
        await queryInterface.dropTable("Tags");
        await queryInterface.dropTable("TagLists");
    },
};
