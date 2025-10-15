import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import commentRoutes from "./routes/commentRoutes.js"; 

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json()); 

app.get("/", (req, res) => {
  res.send("API está rodando...");
});

app.use("/api/comments", commentRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Servidor rodando na porta ${PORT}. API pronta em http://localhost:${PORT}/api/comments`
  )
);

