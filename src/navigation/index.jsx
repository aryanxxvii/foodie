import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Menu from "../pages/Menu/Menu"
import Payment from "../pages/Payment/Payment"
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess"
import Cart from "../pages/Cart/Cart"
const Navigation = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/payment-success" element={<PaymentSuccess />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
