const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose.set('strictQuery', false);

const uri ="mongodb+srv://praveen:GynjEh88AJbVgP5H@cluster0.l4rowni.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.listen(8000, () => {
  console.log("Server started on port 8000");

});