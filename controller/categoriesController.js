const categoriesModel = require("../model/categoriesModel");


const insertCategories = async(req, res) => {
    try {
        const categories = await new categoriesModel({...req.body });
        categories.save();

        res.status(201).send(categories);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getCategories = async(req, res) => {
    try {
        const categories = await categoriesModel.find({});

        res.status(200).send(categories);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getCategoriesDetails = async(req, res) => {
    try {
        const categoriesDetails = await categoriesModel.findById(req.params.id);

        res.status(200).send(categoriesDetails);
    } catch (error) {

    }
};

const updateCategories = async(req, res) => {};

const deleteCategories = async(req, res) => {};



module.exports = {
    insertCategories,
    getCategories,
    getCategoriesDetails,
    updateCategories,
    deleteCategories,
};