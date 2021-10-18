const express = require("express");
const router = express.Router();


const UsersRoute = require("./users");
const RolesRoute = require("./roles");
const CategoriesRoute = require("./categories");
// const TagsRoute = require("./tags");


router.use("/users", UsersRoute);
router.use("/roles", RolesRoute);
router.use("/categories", CategoriesRoute);
// router.use("/tags", TagsRoute);



module.exports = router;