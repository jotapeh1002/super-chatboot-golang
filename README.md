# 🤖 SuperChat AI — Chatbot com ChatGPT e WebSockets em Go

Aplicação de chatbot em tempo real desenvolvida utilizando **Golang (Go)**, **WebSockets** e a **API da OpenAI**.

O projeto permite uma comunicação bidirecional em tempo real entre cliente e servidor, onde o usuário envia mensagens através de uma conexão WebSocket e recebe respostas geradas pelo modelo de inteligência artificial da OpenAI.

---

## 🚀 Tecnologias utilizadas

- **Golang (Go)** — Linguagem principal do backend
- **WebSockets** — Comunicação em tempo real entre cliente e servidor
- **OpenAI API** — Geração das respostas utilizando modelos de IA
- **HTML + JavaScript** — Interface do cliente
- **TailwindCSS** — Estilização da interface

---

## 📌 Funcionalidades

✅ Chat em tempo real utilizando WebSockets  
✅ Integração com ChatGPT através da API da OpenAI  
✅ Comunicação bidirecional cliente ↔ servidor  
✅ Interface web responsiva em modo dark  
✅ Processamento das mensagens no backend utilizando Go  

---

## 🏗️ Arquitetura

Fluxo da aplicação:

```
Usuário
   |
   |
Frontend (JavaScript)
   |
   | WebSocket
   |
Servidor Go
   |
   |
OpenAI API
   |
   |
Resposta da IA
   |
   |
Frontend
```

---

## 📂 Estrutura do projeto

```
.
├── cmd
│   └── main.go
│
├── internal
│   └── handlers
│       └── talks.go
│
├── public
│   ├── index.html
│   └── app.js
│
├── .env
└── README.md
```

---

## ⚙️ Configuração

### 1. Clone o projeto

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
```

Entre na pasta:

```bash
cd seu-projeto
```

---

### 2. Configure a chave da OpenAI

Crie um arquivo `.env`:

```env
OPENAI_API_KEY=sua_chave_aqui
```

A chave pode ser criada no painel:

https://platform.openai.com

---

### 3. Instale as dependências

```bash
go mod tidy
```

---

### 4. Execute o projeto

```bash
go run main.go
```

Servidor iniciado:

```
http://localhost:9090
```

---

## 🔌 WebSocket

A aplicação utiliza WebSocket para manter uma conexão persistente entre o navegador e o servidor.

Exemplo:

```javascript
const socket = new WebSocket(
  "ws://localhost:9090"
);
```

Diferente do HTTP tradicional, o servidor não precisa esperar uma nova requisição para responder. A conexão permanece aberta permitindo troca de mensagens em tempo real.

---

## 🧠 Integração com OpenAI

As mensagens enviadas pelo usuário são encaminhadas para a API da OpenAI:

```text
Usuário:
"Explique o que é Go"

        ↓

OpenAI API

        ↓

Resposta gerada pela IA
```

---

## 📦 Bibliotecas utilizadas

### OpenAI Platform

API utilizada para comunicação com os modelos de inteligência artificial.

https://platform.openai.com


### WebSocket Go

Biblioteca utilizada para criação da comunicação WebSocket:

https://pkg.go.dev/golang.org/x/net/websocket


### Ícones

Recursos visuais utilizados:

https://www.flaticon.com

---

## 🎨 Interface

A interface possui:

- Tema dark
- Layout inspirado em assistentes modernos de IA
- Conversas organizadas em mensagens
- Atualização em tempo real

---

## 📚 Conceitos aplicados

Durante o desenvolvimento foram utilizados conceitos como:

- WebSocket handshake
- Comunicação cliente/servidor
- Goroutines
- Manipulação de streams
- Integração com APIs externas
- Variáveis de ambiente
- Organização de projetos Go

---

## 📝 Melhorias futuras

Algumas ideias para evolução:

- [ ] Streaming de respostas token por token
- [ ] Histórico de conversas
- [ ] Autenticação de usuários
- [ ] Persistência das mensagens em banco de dados
- [ ] Dockerização
- [ ] Deploy em cloud
- [ ] Sistema de usuários e sessões

---

## 👨‍💻 Autor

Desenvolvido utilizando **Golang** com foco em aprendizado de aplicações em tempo real e integração com inteligência artificial.