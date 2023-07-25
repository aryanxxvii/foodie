import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice"
import ProductDetailCard from "../../components/ProductDetailCard"
import { addToCart } from "../../stores/cart/cartSlice"

const Menu = () => {
  const dispatch = useDispatch()

  const products = useSelector(selectAllProducts)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onAddProduct = (product) => {
    dispatch(addToCart(product))
  }

  return (
    <div className="bg-white">
      {products.status !== "fulfilled" ? (
        <div>loading...</div>
      ) : (
        <div className="menu-wrapper text-center">
          {/* {products.products && (
            <Tabs
              list={products.products.map((product) => product.name.name)}
              activeTab={activeTab}
              onTabSwitch={onTabSwitch}
            />
          )} */}
          {/* <div></div? */}
          <h1 className="text-4xl mt-24 font-bold text-orange-400">Our Menu</h1>
          <div className="grid grid-cols-2 mx-24">
            {/* <div className="w-full p-8 col-span-1 mx-auto"> */}
            {products.products &&
              // products.products[activeTabIndex].products.map(
              products.products[1].products.map((product, index) => {
                return (
                  <ProductDetailCard
                    key={index}
                    product={product}
                    onAddProduct={onAddProduct}
                  />
                )
              })}
            {/* </div> */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
