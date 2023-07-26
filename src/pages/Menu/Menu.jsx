import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice"
import ProductDetailCard from "../../components/ProductDetailCard"
import { Tabs } from "../../components/Tabs"

const Menu = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState("")
  const [activeTabIndex, setActiveTabIndex] = useState(0)
  const products = useSelector(selectAllProducts)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  const onTabSwitch = (newActiveTab) => {
    setActiveTab(newActiveTab)
    let categories = products.products.map((product) => product.name.name)
    console.log(categories)
    let index = categories.findIndex((category) => newActiveTab === category)

    if (index > -1) {
      setActiveTabIndex(index)
    } else {
      setActiveTabIndex(0)
    }
  }
  return (
    <div className="bg-white">
      {products.status !== "fulfilled" ? (
        <div>loading...</div>
      ) : (
        <div className="menu-wrapper text-center p-8">
          {products.products && (
            <Tabs
              list={products.products.map((product) => product.name.name)}
              activeTab={activeTab}
              onTabSwitch={onTabSwitch}
            />
          )}

          <h1 className="text-4xl font-bold text-orange-400">Our Menu</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 mx-24 py-12 gap-24 ">
            {products.products &&
              products.products[activeTabIndex].products.map(
                (product, index) => {
                  return <ProductDetailCard key={index} product={product} />
                }
              )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Menu
