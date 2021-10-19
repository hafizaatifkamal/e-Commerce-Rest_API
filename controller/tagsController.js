const tagsModel = require("../model/tagsModel");
const TagsRoute = require("../routes/tags");


const insertTags = async(req, res) => {
    try {
        const tags = await new tagsModel({...req.body });
        tags.save();

        res.status(201).send(tags);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getTags = async(req, res) => {
    try {
        const tags = await tagsModel.find({});

        res.status(200).send(tags);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getTagsDetails = async(req, res) => {
    try {
        const tagsDetails = await tagsModel.findById(req.params.id);

        res.status(200).send(tagsDetails);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};

const updateTags = async(req, res) => {};

const deleteTags = async(req, res) => {};



module.exports = {
    insertTags,
    getTags,
    getTagsDetails,
    updateTags,
    deleteTags,
};