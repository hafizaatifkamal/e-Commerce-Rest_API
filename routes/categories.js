const express = require("express");
const CategoriesRoute = express.Router();


const {
    insertCategories,
    getCategories,
    getCategoriesDetails,
    updateCategories,
    deleteCategories
} = require("../controller/categoriesController");


CategoriesRoute.post("/", insertCategories);
CategoriesRoute.get("/", getCategories);
CategoriesRoute.get("/:id", getCategoriesDetails);
CategoriesRoute.put("/", updateCategories);
CategoriesRoute.delete("/:id", deleteCategories);


module.exports = CategoriesRoute;