import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  //set updates the state
  setProducts:(products) => set({ products }),

  //creates a new product:
  createProduct: async (newProduct) => {

    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill in all fields" };
    }

    const res = await fetch("/api/products", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(newProduct),
    });

    // parsing the response
    const data = await res.json();

    // updates adding the new product (data.data) to the list of products
    set((state) => ({ products: [...state.products, data.data] }));
    return { success: true, message: "Product created successfully" };
  },

  //fetches all products
  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  //deletes a product
  deleteProduct: async (id) => {

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if(!data.success) {
      return { success: false, message: data.message };
    }
    
    set((state) => ({ products: state.products.filter(product => product._id !== id) }))
    return { success: true, message: data.message };
  }
}));
