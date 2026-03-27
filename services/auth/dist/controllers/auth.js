import User from "../model/User.js";
import jwt from "jsonwebtoken";
import TryCatch from "../middlewares/tryCatch.js";
export const loginUser = TryCatch(async (req, res) => {
    const { email, name, picture } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
        user = await User.create({
            name,
            email,
            image: picture
        });
    }
    const token = jwt.sign({ user }, process.env.JWT_SECRECT, {
        expiresIn: "5d"
    });
    res.json({
        message: "login success",
        token,
        user
    });
});
