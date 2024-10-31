const userModel = require("../model/user_model");
const { v4: uuidv4 } = require("uuid");
const token = require("../model/user_token");


const userLoginHandler = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email && !password) {
        return res.status(400).json({ err: "email and password should be provided" });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: "could not find the user" });
    }
    const userPassword = user.comparePassword(password);
    if (!userPassword) {
        return res.status(400).json({ msg: "unable to login" });
    }
    const sessionId = uuidv4();
    
    await token.create({ userId: user._id,token: sessionId });
    // res.cookie("sessionId", sessionId);
    return res.status(200).json({ sessionId: sessionId });

}

module.exports = userLoginHandler;