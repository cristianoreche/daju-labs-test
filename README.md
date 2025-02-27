DajuLabs Test

Este projeto é uma solução para o teste da DajuLabs, que consiste em desenvolver uma API RESTful para ler um arquivo CSV contendo registros de vendas e devoluções, armazená-los em um banco de dados em memória e disponibilizar um endpoint que retorne os pares de venda e devolução. Além disso, foi desenvolvido um frontend em React para exibir os dados em uma tabela com paginação e busca.

🚀 Tecnologias Utilizadas

Backend:

Node.js

Express.js

SQLite (modo em memória)

csv-parser

CORS

Frontend:

React.js

Axios

Estilização com CSS (BEM Methodology)

Paginação e busca interativa

📂 Estrutura do Projeto

daju-labs-test/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Lógica dos endpoints
│   │   ├── services/         # Serviços de manipulação de dados
│   │   ├── models/           # Modelos e estrutura do banco de dados
│   │   ├── database/         # Configuração do banco em memória
│   │   ├── app.js            # Configuração do servidor Express
│   │   └── server.js         # Inicialização do servidor
│   ├── data/
│   │   └── vendas_e_devoluções.csv  # Arquivo CSV com os dados de vendas e devoluções
│   ├── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/       # Componentes do React (Tabela, Paginação, etc.)
│   │   ├── App.js            # Componente principal
│   │   └── index.js          # Inicialização do React
│   ├── package.json
│
└── README.md                 # Documentação do projeto

🛠 Como Rodar o Projeto

1. Clonar o repositório

git clone https://github.com/seu-usuario/daju-labs-test.git
cd daju-labs-test

2. Rodar o Backend

cd backend
npm install
node src/server.js

O backend será iniciado em http://localhost:3000

3. Rodar o Frontend

cd ../frontend
npm install
npm start

O frontend será iniciado em http://localhost:3001

📌 Funcionalidades

✅ API RESTful que processa dados do CSV e retorna pares de venda e devolução.
✅ Frontend React exibindo os dados em uma tabela.
✅ Paginação responsiva e campo de busca.
✅ CORS configurado para permitir comunicação entre frontend e backend.

📌 Endpoint Disponível

GET /api/transactions - Retorna a lista de transações com vendas e devoluções pareadas.

🔗 Repositório

📌 GitHub Repository: https://github.com/seu-usuario/daju-labs-test

