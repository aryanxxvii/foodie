import { useSelector } from "react-redux"
import { cartProducts, totalCartValue } from "../stores/cart/cartSlice"
import { ProductsSummaryCard } from "./ProductSummaryCard"
import Button from "./elements/Button"

export const ProductsSummary = ({ onTabSwitch }) => {
  const cart = useSelector(cartProducts)
  const cartValue = useSelector(totalCartValue)
  const handleClick = () => {
    onTabSwitch("Delivery")
  }
  return (
    <div className="flex flex-col">
      {cart &&
        cart?.map((product, index) => {
          return <ProductsSummaryCard product={product} key={index} />
        })}
      <div className="flex justify-between border-y-2 pb-4 mt-10 px-20 pt-4 text-xl">
        <div>Your total cart value is: </div>
        {"₹" + cartValue}
      </div>
      <div className="flex justify-end px-16 pt-4">
        <Button
          variant="primary"
          className="flex items-center"
          onClick={handleClick}
        >
          <span className="mr-1">Next</span>
        </Button>
      </div>
    </div>
  )
}
