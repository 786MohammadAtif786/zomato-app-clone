import { AuthenticatedRequest } from "../middleware/isAuth.js";
import TryCatch from "../middleware/tryCatch.js";
import Address from "../model/Address.js";
import Cart from "../model/Cart.js";
import { IMenuItem } from "../model/MenuItem.js";
import { IRestaurant } from "../model/Restaurant.js";


export const createOrder = TryCatch(async(req: AuthenticatedRequest, res) => {
    const user = req.user;
    if(!user) {
        return res.status(401).json({
            message: "Unauthorized"
        });
    }
    const { paymentMethod, addressId } = req.body;

    if(!addressId) {
        return res.status(400).json({
            message: "Address is required"
        })
    }

    const address = await Address.findOne({
        _id: addressId,
        userId: user._id,
    })
    if(!address) {
        return res.status(404).json({
            message: "Address Not found"
        })
    }
    const cartItems = await Cart.find({ userId: user._id })
    .populate<{ itemId: IMenuItem }>("itemId")
    .populate<{ restaurantId: IRestaurant }>("restaurantId");
    if(cartItems.length === 0) {
        return res.status(400).json({
            message: "Cart is emplty"
        })
    }
    const firstCartItem = cartItems[0];

    if (!firstCartItem || !firstCartItem.restaurantId) {
        return res.status(400).json({
        message: "Invailid Cart Data",
    });
  }
})

