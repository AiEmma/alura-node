import mongoose from "mongoose";

mongoose.connect("mongodb+srv://@cluster0.nc8neqt.mongodb.net/alura-node")

const db = mongoose.connection

export default db;
