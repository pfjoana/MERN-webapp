import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import Product from'./models/product.model.js';

dotenv.config();

const app = express();

app.use(express.json()); //to accept JSON data in the req.body

// app.get('/products', (req, res) => {});


//create product
app.post("/api/products", async (req, res) => {
  const product = req.body;

  //check if all data is provided
  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success:false, message: "Please fill in all the required fields"});
  }

  //create the product

  const newProduct = new Product(product)

  //save it in databse
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct});
  } catch (error) {
    console.error("Error in create product:", error.message);
    res.status(500).json({ success: false, message: "Server Error"})
  }

});


//delete product
app.delete("/api/products/:id", async (req, res) => {
  const {id} = req.params;

  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product deleted"});
  } catch (error) {
    res.status(400).json({ success: false, message: "Product not found" })
  }
})


app.listen(5000, () => {
  connectDB();
  console.log('Server running on port 5000');
});
