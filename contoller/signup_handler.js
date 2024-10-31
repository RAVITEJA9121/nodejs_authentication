const userModel = require("../model/user_model");


const userSignUpHandler = async (req, res) => {
    const {userName, email, password, phoneNumber} = req.body;
    
    if (!email && !password && !userName && !phoneNumber) {
        return res.status(400).json({ err: "required fields should be provided" });
    }
    
    const user = await userModel.create({
        userName: userName,
        password: password,
        email: email,
        phoneNumber: phoneNumber
    });
    if (!user) {
        return res.status(400).json({ msg: "unable to save the user" });
    }
    return res.status(200).json({ msg: "user created successfully" });
}

module.exports = userSignUpHandler;