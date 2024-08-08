import express from "express";
import exphbs from "express-handlebars";
import conn from "./db/conn.js";

//Models
import User from "./models/User.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));

//ROTAS DA APLICAÇÃO
//mostrar página de cadastro
app.get("/users/create", (request, response) => {
  
});

//receber dados do formulário de cadastro
app.post("/users/create", async (request, response) => {
  const { nome, profissao, email, imagem } = request.body;

});

// Selecionar um único usuário
app.get("/users/:id", async (request, response) => {
  const { id } = request.params;

});

//Excluir um usuário
app.post("/users/delete/:id", async (request, response) => {
  const id = request.params.id;
  
});

//Selecionar um usuário para editar
app.get("/users/edit/:id", async (request, response) => {
  const id = request.params.id;
 
});

app.post("/users/update", async (request, response) => {
  const { id, nome, profissao, email, imagem } = request.body;

});

//Listar todos os usuário
app.get("/", async (request, response) => {
  
});

conn
  .sync()
  .then(() => {
    app.listen(3333, () => {
      console.log("Servidor on port: 3333");
    });
  })
  .catch((err) => console.error(err));
