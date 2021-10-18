const express = require("express");
const RolesRoute = express.Router();


const {
    insertRoles,
    getRoles,
    getRolesDetails,
    updateRoles,
    deleteRoles
} = require("../controller/rolesController");


RolesRoute.post("/", insertRoles);
RolesRoute.get("/", getRoles);
RolesRoute.get("/:id", getRolesDetails);
RolesRoute.put("/", updateRoles);
RolesRoute.delete("/:id", deleteRoles);


module.exports = RolesRoute;