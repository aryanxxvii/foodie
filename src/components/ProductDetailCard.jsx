import Button from "./elements/Button"
import { addToCart } from "../stores/cart/cartSlice"
import { useDispatch } from "react-redux"
const ProductDetailCard = ({ product }) => {
  const dispatch = useDispatch()
  const addProduct = () => {
    dispatch(addToCart(product))
    console.log(product)
  }
  // const test = () => {
  //   console.log("test")
  // }
  return (
    <div className="rounded-lg p-8 bg-slate-100">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-3xl pb-4">{product.name}</h2>
        <p className="text-xl text-gray-600 pb-4">{product.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-3xl text-black">₹{product.price}</div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          src={product.imageUrls}
          className="w-60 h-60 rounded-xl object-cover"
          alt={product.name}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <Button onClick={addProduct}>Add to Cart</Button>
      </div>
    </div>
  )
}

export default ProductDetailCard
