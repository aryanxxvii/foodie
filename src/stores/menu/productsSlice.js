import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const initialState = {
  products: [],
  error: null,
  status: "idle",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled"
      state.products = [...action.payload.data]
    })
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending"
    })
  },
})

export const { getProducts } = productsSlice.actions

export default productsSlice.reducer

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch(
        "https://foodie-bxyn.onrender.com/api/products-by-categories"
      )
      const data = await response.json()
      return data
    } catch (err) {
      return err.message
    }
  }
)

export const selectAllProducts = (state) => state.product
