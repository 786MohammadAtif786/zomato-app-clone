import { useNavigate } from "react-router-dom";
import { useAppData } from "../context/AppContext"
import { useState } from "react";

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
  return (
    <div>MealGo Cart</div>
  )
}

export default Cart