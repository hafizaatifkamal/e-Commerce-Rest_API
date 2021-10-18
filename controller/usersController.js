const usersModel = require("../model/usersModel");

// handelling errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = {...req.body };

    //Duplicate email found
    if (err.code === 11000) {
        errors.email = "This email is already registered, try with a new email";
        return errors;
    }

    return errors;
};


const insertUsers = async(req, res) => {

    try {
        const users = await new usersModel({...req.body });
        users.save();
        // console.log(users);
        res.status(201).send(users);

    } catch (error) {
        // console.log(`Something went wrong! ${error}`);

        const errors = handleErrors(error);
        res.status(400).send(errors);
    }
};


const getUsers = async(req, res) => {
    try {
        const users = await usersModel.find({});
        // console.log(users);
        res.status(200).send(users);
    } catch (error) {
        console.log(`Something went wrong! ${error}`);
    }
};


const getUsersDetails = async(req, res) => {
    try {
        const usersDetails = await usersModel.findById(req.params.id);
        // console.log(usersDetails);
        res.status(200).send(usersDetails);
    } catch (error) {

    }
};


const usersQuery = async(req, res) => {

    try {

        const query = req.query;
        const queryParams = {...query };

        const users = await usersModel.find(queryParams);

        // console.log(queryParams);

        res.status(200).send(users);

    } catch (error) {

    }
}


const updateUsers = async(req, res) => {
    try {
        const modifiedUser = await usersModel.findByIdAndUpdate(req.params.id, req.body);

        // console.log(modifiedUser);
        res.status(200).send(modifiedUser);
    } catch (error) {

    }
};

const deleteUsers = async(req, res) => {
    try {

        const deletedUser = await usersModel.findByIdAndDelete(req.params.id, req.body);

        // console.log(deletedUser);
        res.status(200).send(deletedUser);
    } catch (error) {

    }
};



module.exports = {
    insertUsers,
    getUsers,
    getUsersDetails,
    usersQuery,
    updateUsers,
    deleteUsers,
};