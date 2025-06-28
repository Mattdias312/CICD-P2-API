const winston = require('winston');
const axios = require('axios');

// Novas variáveis de ambiente
const betterStackHost = process.env.BETTERSTACK_HOST; // Ex: https://s1363202.eu-nbg-2.betterstackdata.com/
const betterStackToken = process.env.BETTERSTACK_TOKEN; // Ex: L9HmCFmbHAcgpLRPfDAdYP4g

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
  ],
});

// Função para enviar log para o Better Stack
async function sendToBetterStack(log) {
  if (!betterStackHost || !betterStackToken) return;
  try {
    await axios.post(betterStackHost, log, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${betterStackToken}`,
      },
    });
  } catch (err) {
    // Não interrompe a aplicação se falhar
    console.error('Erro ao enviar log para Better Stack:', err.message);
  }
}

// Middleware para logar requisições
const betterstackLogger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const log = {
      method: req.method,
      url: req.originalUrl,
      status: res.statusCode,
      duration,
      timestamp: new Date().toISOString(),
      ip: req.ip,
    };
    logger.info(log);
    sendToBetterStack(log);
  });
  next();
};

module.exports = betterstackLogger; 