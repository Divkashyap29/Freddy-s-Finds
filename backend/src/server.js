//main

import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";

const app = express();

// parse JSON bodies
app.use(express.json());

//products or whatever json data
app.use("/api/notes", notesRoutes);

connectDB(); //connnecting db

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
}); 