import React, { useEffect, useState } from "react"
import { ProductPreviewCard } from "./ProductPreviewCard"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useDispatch } from "react-redux"
import { addToCart } from "../stores/cart/cartSlice"
const ProductsPreview = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  useEffect(() => {
    fetch("https://foodie-bxyn.onrender.com/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .catch((e) => console.log(e))
  }, [])
  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }
  return (
    <div className="container flex flex-col mx-auto pb-4 w-4/5">
      <h2 className="text-2xl pl-5 text-gray-800 font-bold ">
        Delicacies for you
      </h2>
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="w-full p-3">
                <ProductPreviewCard
                  key={index}
                  product={product}
                  onAddProduct={onAddProduct}
                />
              </div>
            )
          })}
      </Carousel>
    </div>
  )
}

export default ProductsPreview
