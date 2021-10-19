const rolesModel = require("../model/rolesModel");
const RolesRoute = require("../routes/roles");


const insertRoles = async(req, res) => {
    try {
        const roles = await new rolesModel({...req.body });
        roles.save();

        res.status(201).send(roles);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getRoles = async(req, res) => {
    try {
        const roles = await rolesModel.find({});

        res.status(200).send(roles);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getRolesDetails = async(req, res) => {
    try {
        const rolesDetails = await rolesModel.findById(req.params.id);

        res.status(200).send(rolesDetails);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};

const updateRoles = async(req, res) => {};

const deleteRoles = async(req, res) => {};



module.exports = {
    insertRoles,
    getRoles,
    getRolesDetails,
    updateRoles,
    deleteRoles,
};