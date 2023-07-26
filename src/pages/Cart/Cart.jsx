import React from "react"
import Button from "../../components/elements/Button"
import { useSelector } from "react-redux"
import { cartProducts } from "../../stores/cart/cartSlice"
import useTabSwitch from "../../hooks/useTabSwitch"
import { Tabs } from "../../components/Tabs"
import AddressForm from "../../components/AddressForm"
import { ProductsSummary } from "../../components/ProductsSummary"
import Payment from "../Payment/Payment"
const Cart = () => {
  const cart = useSelector(cartProducts)
  const tabs = ["Summary", "Delivery", "Payment"]
  const [currentTab, handleTabSwitch] = useTabSwitch(tabs, "Summary")
  if (!cart || cart.length == 0) {
    return (
      <div className="text-black flex flex-col items-center justify-center h-5/6">
        <h1 className="text-orange-400 text-2xl font-bold pb-5">Uh oh...</h1>
        <h2>Your Cart is empty</h2>
      </div>
    )
  }
  return (
    <div className=" bg-white text-black mx-auto mt-10 text-center border border-gray-200/75 p-4 md:w-2/3 rounded-lg shadow-md sm:p-6 lg:p-8">
      <h1 className="text-4xl font-bold text-orange-400">Your Cart</h1>

      <Tabs list={tabs} onTabSwitch={handleTabSwitch} activeTab={currentTab} />
      <div className={`tabs ${currentTab !== "Summary" ? "hidden" : ""}`}>
        <ProductsSummary onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== "Delivery" ? "hidden" : ""}`}>
        <AddressForm onTabSwitch={handleTabSwitch} />
      </div>
      <div className={`tabs ${currentTab !== "Payment" ? "hidden" : ""}`}>
        <Payment />
      </div>
    </div>
  )
}

export default Cart
