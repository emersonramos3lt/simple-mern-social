import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "O conteúdo do comentário é obrigatório"],
      trim: true, 
      maxlength: 500, 
    },

    
    author: {
      type: String,
      default: "Anônimo", // Se o usuário não fornecer um nome
      maxlength: 100,
    },

   
  },
  {
    timestamps: true, // Adiciona automaticamente campos 'createdAt' e 'updatedAt'
  }
);


const Comment = mongoose.model("Comment", commentSchema);

export default Comment;

