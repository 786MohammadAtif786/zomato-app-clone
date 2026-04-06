import TryCatch from "../middleware/tryCatch.js";
import Address from "../model/Address.js";
export const createOrder = TryCatch(async (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    const { paymentMethod, addressId } = req.body;
    if (!addressId) {
        return res.status(400).json({
            message: "Address is required"
        });
    }
    const address = await Address.findOne({
        _id: addressId,
        userId: user._id,
    });
    if (!address) {
        return res.status(404).json({
            message: "Address Not found"
        });
    }
});
