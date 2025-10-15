const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware para JSON
app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Backend rodando!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor backend rodando em http://localhost:${PORT}`);
});