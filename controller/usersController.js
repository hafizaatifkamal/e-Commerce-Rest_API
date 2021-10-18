const { json } = require("body-parser");
const usersModel = require("../model/usersModel");
const UsersRoute = require("../routes/users");


// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { firstName: '', email: '', password: '' };

    // duplicate email error
    if (err.code === 11000) {
        errors.email = 'This email is registered already';
        return errors;
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        // console.log(err);
        Object.values(err.errors).forEach(({ properties }) => {
            // console.log(val);
            // console.log(properties);
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}


const insertUsers = (req, res, next) => {

    let user = new usersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        profileImage: req.body.profileImage
    })
    user.save()
        .then(user => {
            res.json({
                message: "User Registered Successfully!"
            })
        })
        .catch(err => {
            // res.json({
            //     message: "Something went Wrong!! Please enter a valid email and password..."
            // })

            const errors = handleErrors(err);
            res.status(400), json({ errors });
        })
}


// const insertUsers = async(req, res) => {

//     try {
//         const users = await new usersModel({...req.body });
//         users.save();
//         // console.log(users);
//         res.status(201).send(users);

//     } catch (error) {
//         // console.log(`Something went wrong! ${error}`);

//         res.status(400).send(error);
//     }
// };


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