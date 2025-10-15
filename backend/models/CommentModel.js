import mongoose from "mongoose";

// 1. Definição do Schema (a estrutura de como o dado será salvo)
// O Mongoose usa Schemas para impor uma estrutura ao MongoDB
const commentSchema = mongoose.Schema(
  {
    // O conteúdo principal do comentário, obrigatório.
    content: {
      type: String,
      required: [true, "O conteúdo do comentário é obrigatório"],
      trim: true, // Remove espaços em branco antes e depois do texto
      maxlength: 500, // Limita o tamanho do comentário (opcional, mas recomendado)
    },

    // (Opcional, mas útil) Para saber quem postou, você adicionaria um ID de Usuário
    // Neste projeto simples, podemos começar apenas com um campo de texto para o nome:
    author: {
      type: String,
      default: "Anônimo", // Se o usuário não fornecer um nome
      maxlength: 100,
    },

    // Para identificar a qual post/item o comentário pertence (opcional no início, mas útil)
    // Se o seu "post" for o item único que recebe comentários, você não precisaria disso
    // se for um item fixo. Mas vamos manter o escopo simples:
    // Por enquanto, cada item que salvarmos será um "Comentário".
  },
  {
    // 2. Opções do Schema (para gerenciar datas de criação/atualização)
    timestamps: true, // Adiciona automaticamente campos 'createdAt' e 'updatedAt'
  }
);

// 3. Criação do Modelo (Comment)
// O modelo é o que usamos para interagir com o banco de dados (Ex: Comment.find(), Comment.create())
const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
