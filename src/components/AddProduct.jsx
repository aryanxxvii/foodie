import { AddRounded } from "@mui/icons-material"

export const AddProduct = ({ onAddProduct }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={onAddProduct}
        className="bg-white text-orange-400 content-center transition-all duration-400 hover:scale-[1.2] rounded-full w-7 h-7 flex items-center justify-center "
      >
        <AddRounded className="p-1" />
      </button>
    </div>
  )
}
