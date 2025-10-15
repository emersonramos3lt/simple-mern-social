import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000/api/comments";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newCommentContent, setNewCommentContent] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("Anônimo");
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setComments(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao buscar comentários:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newCommentContent.trim())
      return alert("O comentário não pode ser vazio!");

    try {
      const response = await axios.post(API_URL, {
        content: newCommentContent,
        author: newCommentAuthor.trim() || "Anônimo",
      });

      setComments([response.data, ...comments]);

      setNewCommentContent("");
    } catch (error) {
      console.error("Erro ao enviar comentário:", error);
      alert(
        "Falha ao enviar comentário. Verifique se o servidor Express está rodando (porta 5000)!"
      );
    }
  };

  if (loading) return <p>Carregando comentários...</p>;

  return (
    <main className="container">
      <form onSubmit={handleSubmit} className="form-comment">
        <input
          type="text"
          placeholder="Seu nome (Opcional)"
          value={newCommentAuthor}
          onChange={(e) => setNewCommentAuthor(e.target.value)}
        />
        <textarea
          placeholder="Escreva seu comentário aqui..."
          value={newCommentContent}
          onChange={(e) => setNewCommentContent(e.target.value)}
          rows="4"
          required
        />
        <button className="button-style" role="button" type="submit">
          Publicar
        </button>
      </form>

      <h2 className="h2-title">Comentários ({comments.length})</h2>

      {comments.map((comment) => (
        <div className="comment-container" key={comment._id}>
          <strong>{comment.author}</strong>
          <span className="comment-date">
            {new Date(comment.createdAt).toLocaleDateString()}
          </span>
          <p>{comment.content}</p>
        </div>
      ))}
      <p className="p-warning">Não compartilhe nenhuma informação pessoal!</p>
    </main>
  );
};

export default CommentSection;

