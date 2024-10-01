import app from './app'; // Importa la aplicación configurada
import dotenv from 'dotenv';

dotenv.config(); // Para cargar las variables de entorno, si las necesitas

const PORT = process.env.PORT || 5000;

// Arranca el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
