import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/protectedRoutes.tsx";
import PublicRoute from "./components/publicRouter";
import SelectRole from "./pages/SelectRole";
import Navbar from "./components/Navbar.tsx";

function App() {
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
        </Route>
       
      </Routes>
      <Toaster />
    </BrowserRouter>
   </>
  )
}

export default App  