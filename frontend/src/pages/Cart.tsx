import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import { useState } from "react";
import type { IRestaurant } from "../types";

function Cart() {
  const{cart, subTotal, quauntity, fetchCart} = useAppData();
  const navigate = useNavigate();
  const [loadingItemId, setLoadingItemId] = useState<string | null>(null);
  const [clearingCart, setClearingCart] = useState(false);

  if (!cart || cart.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500 text-lg">Your cart is empty</p>
      </div>
    );
  }

  const restaurant = cart[0].restaurantId as IRestaurant;

  const deliveryFee = subTotal < 250 ? 49 : 0;

  const platfromFee = 7;

  const grandTotal = subTotal + deliveryFee + platfromFee;

  return (
    <div>MealGo Cart</div>
  )
}

export default Cart