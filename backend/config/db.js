import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`Conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Erro: ${error.message}`);

    // Encerra o processo do Node.js se houver falha na conexão
    process.exit(1);
  }
};

export default connectDB;

