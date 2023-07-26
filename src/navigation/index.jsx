import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Header } from "../components/Header"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Menu from "../pages/Menu/Menu"
import Payment from "../pages/Payment/Payment"

import Cart from "../pages/Cart/Cart"
import { useSelector } from "react-redux"
import { cartProducts } from "../stores/cart/cartSlice"

const Navigation = () => {
  const productsInCart = useSelector(cartProducts)

  return (
    <BrowserRouter>
      <Header cartCount={productsInCart ? productsInCart.length : 0} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation
