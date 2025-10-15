import Comment from "../models/CommentModel.js"; 

const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).sort({ createdAt: -1 });

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar comentários",
      error: error.message,
    });
  }
};


const createComment = async (req, res) => {
  const { content, author } = req.body;

  if (!content) {
    return res
      .status(400)
      .json({ message: "O conteúdo do comentário é obrigatório." });
  }

  try {
    const newComment = await Comment.create({
      content,
      author: author || "Anônimo", 
    });

    res.status(201).json(newComment);
  } catch (error) {
    res.status(400).json({
      message: "Dados inválidos para o comentário",
      error: error.message,
    });
  }
};

export { getComments, createComment };

