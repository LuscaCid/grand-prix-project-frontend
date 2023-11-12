import { Container } from "./style";

export const SignUp =() => {
  return(
   <Container>
    <body>
    <div class="login">

        <img src="src/images/logo-site.jpg" alt="Tech life"/>

        <h1>Cadastro</h1>

        <form action="">
            <div class="input-wrapper">
                <label for="Nome">Nome:</label>
                <input id="login" type="text" placeholder="Nome completo" required/>
            </div>

            <div class="input-wrapper">
                <label for="email">Email:</label>
                <input id="email" type="email" placeholder="Email" required/>
            </div>

            <div class="input-wrapper">
                <label for="username">Nome de usuário:</label>
                <input id="username" type="text" placeholder="Username" required/>
            </div>

            <div class="input-wrapper">
                <label for="senha">Senha:</label>
                <input id="senha" type="text" placeholder="Senha" required/>
            </div>


            <div class="input-wrapper">
                <label for="confirmar-senha">Confirmar Senha:</label>
                <input id="confirmar-senha" type="text" placeholder="Confirmar senha" required/>
            </div>
            
            <div class="cadastro">
                <a href="./login.html">Já possui um login?</a>
            </div>


            <button>Cadastrar</button>
        </form>

    </div>
</body>
   </Container>
   


  )
}