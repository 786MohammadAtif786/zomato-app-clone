import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoutes from "./components/protectedRoutes";
import PublicRoute from "./components/publicRouter";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />} >
             <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />} >
        <Route path="/" element={<Home />} />
        </Route>
       
      </Routes>
      <Toaster />
    </BrowserRouter>
   </>
  )
}

export default App  