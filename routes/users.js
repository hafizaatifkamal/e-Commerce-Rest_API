const express = require("express");
const UsersRoute = express.Router();


const {
    insertUsers,
    getUsers,
    getUsersDetails,
    usersQuery,
    updateUsers,
    deleteUsers
} = require("../controller/usersController");


UsersRoute.post("/", insertUsers);
//UsersRoute.get("/", getUsers);
UsersRoute.get("/:id", getUsersDetails);
UsersRoute.get("/", usersQuery);
UsersRoute.put("/:id", updateUsers);
UsersRoute.delete("/:id", deleteUsers);


module.exports = UsersRoute;