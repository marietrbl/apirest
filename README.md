Essa é uma API REST pra controle de usuários! 😊

- Stack utilizada: "node" + "typescript", "express", "sqlite" e "typeorm".

- Como iniciar o projeto?
<pre>npm install + npm start</pre>

- Como executar o projeto?:
<pre>POST na rota http://localhost5000/add </pre>

- O body deverá ser um JSON com o o exemplo que segue:

<pre>{
	"name": "nome",
	"age": idade,
	"email": "email"
}</pre>

- Obs.: Essa é uma API que permite apenas usuários maiores de 18 anos, aqueles que fugirem à essa condição terão retorno null. 🔞
