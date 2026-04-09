import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProtectedRoutes from "./components/protectedRoutes.tsx";
import PublicRoute from "./components/publicRouter";
import SelectRole from "./pages/SelectRole";
import Navbar from "./components/Navbar.tsx";
import Account from "./pages/Account.tsx";
import { useAppData } from "./context/AppContext.tsx";
import Restaurant from "./pages/Restaurant.tsx";
import RestaurantPage from "./pages/RestaurantPage.tsx";
import Cart from "./pages/Cart.tsx"
import AddAddressPage from "./pages/Address.tsx";
import Checkout from "./pages/Checkout.tsx";
import PaymentSuccess from "./pages/PaymentSuccess.tsx";
import Orders from "./pages/Orders.tsx";
import RiderDashboard from "./pages/RiderDashboard.tsx";

function App() {
  const  { user, loading } = useAppData();

  if(loading) {
    return <h1 className="text-2xl font-bold text-red-500 text-center mt-56">Loading...</h1>
  }
  if( user && user.role === "seller") {
    return <Restaurant />
  }
   if( user && user.role === "rider") {
    return <RiderDashboard />
  }
  return (
   <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<PublicRoute />} >
             <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess/:paymentId" element={<PaymentSuccess />} />
        <Route path="/checkout" element={<Checkout />} />
          <Route path="/Orders" element={<Orders />} />
        <Route path="/address" element={<AddAddressPage />} />
        <Route path="/restaurant/:id" element={<RestaurantPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/account" element={<Account />} />

        </Route>
       
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App  