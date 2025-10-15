import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import commentRoutes from "./routes/commentRoutes.js"; // <--- NOVO: Importa as rotas de comentário

// Carrega as variáveis de ambiente
dotenv.config();

// Conecta ao Banco de Dados
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Permite que o Express leia o body de requisições POST/PUT como JSON

// Rota de teste simples
app.get("/", (req, res) => {
  res.send("API está rodando...");
});

// <--- NOVO: Conecta as rotas da API ao Express. Todas as rotas de comentário começarão com /api/comments
app.use("/api/comments", commentRoutes);

// Configuração da Porta
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Servidor rodando na porta ${PORT}. API pronta em http://localhost:${PORT}/api/comments`
  )
);
