// Importações principais
const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger');
require('dotenv').config();
const betterstackLogger = require('./middlewares/betterstackLogger');
const requestLogger = require('./middleware/requestLogger');

// Inicialização do app
const app = express();
const PORT = process.env.PORT || 3000;

// Banco de dados
const sequelize = require('./config/database');
const User = require('./models/user');

// Middlewares
app.use(express.json());
app.use(morgan('dev'));
console.log('TOKEN:', process.env.LOGTAIL_SOURCE_TOKEN)
app.use(betterstackLogger);
app.use(requestLogger);

// Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Sincronizar banco ao iniciar
sequelize.sync()
  .then(() => console.log('Banco de dados sincronizado'))
  .catch(err => console.error('Erro ao sincronizar banco:', err));

// Rotas de usuários
const userRoutes = require('./routes/userRoutes');
app.use('/users', userRoutes);

// Rota de teste
app.get('/', (req, res) => {
  res.json({ message: 'API rodando com sucesso!' });
});

// Inicialização do servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
