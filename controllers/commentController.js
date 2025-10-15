import Comment from "../models/CommentModel.js"; // Importa o Modelo de Comentário

// @desc    Busca todos os comentários
// @route   GET /api/comments
// @access  Public (qualquer um pode ver)
const getComments = async (req, res) => {
  // O 'try...catch' é usado para lidar com erros na comunicação com o banco de dados
  try {
    // Busca todos os documentos no banco, ordenando do mais novo para o mais antigo (-1)
    const comments = await Comment.find({}).sort({ createdAt: -1 });

    // Responde com status 200 (OK) e envia os comentários em formato JSON
    res.status(200).json(comments);
  } catch (error) {
    // Se der erro (ex: conexão com o DB falhar), envia status 500 (Erro do Servidor)
    res.status(500).json({
      message: "Erro ao buscar comentários",
      error: error.message,
    });
  }
};

// @desc    Cria um novo comentário
// @route   POST /api/comments
// @access  Public (qualquer um pode criar)
const createComment = async (req, res) => {
  // Pega o conteúdo e o autor do corpo da requisição POST
  const { content, author } = req.body;

  // Validação simples (baseada no Schema, mas bom para dar feedback imediato)
  if (!content) {
    // Envia status 400 (Bad Request) se faltar o campo essencial
    return res
      .status(400)
      .json({ message: "O conteúdo do comentário é obrigatório." });
  }

  try {
    // Cria um novo documento de comentário usando o Modelo (Mongoose)
    const newComment = await Comment.create({
      content,
      author: author || "Anônimo", // Usa 'Anônimo' se o autor não for fornecido
    });

    // Responde com status 201 (Created) e o novo comentário criado
    res.status(201).json(newComment);
  } catch (error) {
    // Erros podem ser de validação do Mongoose ou de conexão
    res.status(400).json({
      message: "Dados inválidos para o comentário",
      error: error.message,
    });
  }
};

export { getComments, createComment };
