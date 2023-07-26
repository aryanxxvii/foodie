import { useDispatch } from "react-redux"
import {
  incrementProductAmount,
  decrementProductAmount,
} from "../stores/cart/cartSlice"
import { AddRounded, RemoveRounded } from "@mui/icons-material"

export const ProductsSummaryCard = ({ product }) => {
  const dispatch = useDispatch()

  return (
    <div className="grid grid-cols-3 p-1 sm:p-2">
      <div className="product-image mr-2 col-span-1 border border-grey-200 aspect-square rounded-lg">
        <img
          src={product.imageUrls}
          alt={product.name}
          className="aspect-square"
        />
      </div>

      <div className="product-info flex items-center justify-center">
        <div className="">
          <h3 className="pb-8 font-bold text-orange-400">{product.name}</h3>
          <p className="text-gray-600 mx-10">{product.description}</p>
        </div>
      </div>
      <div className="product-price-qt flex flex-col items-center justify-center">
        <div className="price font-bold pb-4 ">{`${product.price}$`}</div>
        <div className="quantity flex">
          <button
            className="p-1 text-orange-400"
            disabled={product.amount <= 0}
            onClick={() => dispatch(decrementProductAmount(product))}
          >
            <RemoveRounded />
          </button>
          <span className="p-1 text-xl">{product.amount}</span>
          <button
            className="p-1 text-orange-400"
            onClick={() => dispatch(incrementProductAmount(product))}
          >
            <AddRounded />
          </button>
        </div>
      </div>
    </div>
  )
}
