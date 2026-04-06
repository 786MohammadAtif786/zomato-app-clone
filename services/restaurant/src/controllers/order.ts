import { AuthenticatedRequest } from "../middleware/isAuth.js";
import TryCatch from "../middleware/tryCatch.js";
import Address from "../model/Address.js";
import Cart from "../model/Cart.js";
import { IMenuItem } from "../model/MenuItem.js";
import Restaurant, { IRestaurant } from "../model/Restaurant.js";


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
  const restaurantId = firstCartItem.restaurantId._id;

  const restaurant = await Restaurant.findById(restaurantId);

  if (!restaurant) {
    return res.status(404).json({
      message: "No restaurant with this id",
    });
  }

  if (!restaurant.isOpen) {
    return res.status(404).json({
      message: "Sorry this restaurant is closed for now",
    });
  }
  let subtotal = 0;

  const orderItems = cartItems.map((cart) => {
    const item = cart.itemId;

    if (!item) {
      throw new Error("Invalid cart item");
    }

    const itemTotal = item.price * cart.quauntity;

    subtotal += itemTotal;

    return {
      itemId: item._id.toString(),
      name: item.name,
      price: item.price,
      quauntity: cart.quauntity,
    };
  });
})

