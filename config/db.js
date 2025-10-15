import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Tenta conectar usando a variável de ambiente MONGO_URI
    // que foi carregada pelo 'dotenv' no server.js
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erro ao conectar ao MongoDB: ${error.message}`);

    // Encerra o processo do Node.js se houver falha na conexão
    process.exit(1);
  }
};

export default connectDB;
