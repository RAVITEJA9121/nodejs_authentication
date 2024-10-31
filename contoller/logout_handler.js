const userModel = require("../model/user_model");
const token = require("../model/user_token");

const userLogOutHandler = async (req, res) => {
    const { sessionId } = req.body;
    
    if (!sessionId) {
        return res.status(400).json({ err: "sessionId required" });
    }
    const user = await token.findOne({ token:sessionId });
    if (!user) {
        return res.status(400).json({ msg: "could not find the user with the give sessionId" });
    }
    
    await token.deleteOne({ sessionId: sessionId });
    // res.cookie("sessionId", sessionId);
    return res.status(200).json({ msg: "logged out successfully" });

}

module.exports = userLogOutHandler;