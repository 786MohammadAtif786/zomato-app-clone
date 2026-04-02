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

function App() {
  const  { user } = useAppData();
  if( user && user.role === "seller") {
    return <Restaurant />
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
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/account" element={<Account />} />

        </Route>
       
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App  