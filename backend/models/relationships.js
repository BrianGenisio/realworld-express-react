const User = require("./User");
const Article = require("./Article");
const Comment = require("./Comment");
const Tag = require("./Tag");

User.belongsToMany(User, {
    as: "followers",
    through: "Followers",
    foreignKey: "userId",
    timestamps: false,
  });
  User.belongsToMany(User, {
    as: "following",
    through: "Followers",
    foreignKey: "followerId",
    timestamps: false,
  });
  
  User.hasMany(Article, {
    foreignKey: "authorId",
    onDelete: "CASCADE",
  });
  Article.belongsTo(User, { as: "author", foreignKey: "authorId" });
  
  User.hasMany(Comment, {
    foreignKey: "authorId",
    onDelete: "CASCADE",
  });
  Comment.belongsTo(User, { as: "author", foreignKey: "authorId" });
  
  Article.hasMany(Comment, {
    foreignKey: "articleId",
    onDelete: "CASCADE",
  });
  Comment.belongsTo(Article, { foreignKey: "articleId" });
  
  User.belongsToMany(Article, {
    as: "favorites",
    through: "Favorites",
    timestamps: false,
  });
  Article.belongsToMany(User, {
    through: "Favorites",
    foreignKey: "articleId",
    timestamps: false,
  });
  
  Article.belongsToMany(Tag, {
    through: "TagLists",
    as: "tagLists",
    foreignKey: "articleId",
    timestamps: false,
    onDelete: "CASCADE",
  });
  Tag.belongsToMany(Article, {
    through: "ArticleTags",
    uniqueKey: false,
    timestamps: false,
  });
