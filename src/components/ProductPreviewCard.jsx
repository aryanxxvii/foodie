import { AddProduct } from "./AddProduct"

export const ProductPreviewCard = ({ product, onAddProduct }) => {
  const addProduct = () => {
    onAddProduct(product)
  }
  return (
    <div>
      <div className="w-full p-4 m-2 rounded-3xl text-white bg-orange-400/80 text-center">
        <img src={product.imageUrls} alt={product.name} />
        <h2 className="pb-2 text-xl font-bold">{product.name}</h2>
        <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
        <AddProduct onAddProduct={addProduct} />
      </div>
    </div>
  )
}
