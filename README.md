# DajuLabs Test

Este projeto é uma solução para o teste da **DajuLabs**, que consiste em desenvolver uma API RESTful para ler um arquivo CSV contendo registros de vendas e devoluções, armazená-los em um banco de dados em memória e disponibilizar um endpoint que retorne os pares de venda e devolução.

Além disso, foi desenvolvido um **frontend em React** para exibir os dados em uma tabela com paginação e busca.

---

## 🚀 Tecnologias Utilizadas

### Backend:
- **Node.js**
- **Express.js**
- **SQLite (modo em memória)**
- **csv-parser**
- **CORS**

### Frontend:
- **React.js**
- **Axios**
- **Estilização com CSS (BEM Methodology)**
- **Paginação e busca interativa**

---

## 🛠 Como Rodar o Projeto

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/daju-labs-test.git
cd daju-labs-test
```

### 2️⃣ Rodar o Backend

Certifique-se de ter o Node.js instalado na sua máquina. Em seguida, execute os seguintes comandos:

```bash
cd backend
npm install
node src/server.js
```

O backend será iniciado em http://localhost:3000.

### 3️⃣ Rodar o Frontend

Certifique-se de ter o Node.js instalado na sua máquina. Em seguida, execute os seguintes comandos:

```bash
cd ../frontend
npm install
npm start
```

O frontend será iniciado em http://localhost:3001.
