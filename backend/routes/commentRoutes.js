import express from "express";
import {
  getComments,
  createComment,
} from "../controllers/commentController.js"; // Importa as funções do controller

const router = express.Router(); // Cria um objeto router do Express

// Rota GET para buscar todos os comentários
// Quando o cliente fizer um GET para /api/comments, a função getComments será executada.
router.get("/", getComments);

// Rota POST para criar um novo comentário
// Quando o cliente fizer um POST para /api/comments, a função createComment será executada.
router.post("/", createComment);

export default router;
