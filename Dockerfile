# Imagem base
FROM node:18

# Diretório de trabalho
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar o restante do código
COPY . .

# Expor a porta
EXPOSE 3000

# Comando para iniciar a API
CMD ["npm", "start"]

