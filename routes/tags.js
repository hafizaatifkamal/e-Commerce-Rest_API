const express = require("express");
const TagsRoute = express.Router();


const {
    insertTags,
    getTags,
    getTagsDetails,
    updateTags,
    deleteTags
} = require("../controller/tagsController");


TagsRoute.post("/", insertTags);
TagsRoute.get("/", getTags);
TagsRoute.get("/:id", getTagsDetails);
TagsRoute.put("/", updateTags);
TagsRoute.delete("/:id", deleteTags);


module.exports = TagsRoute;