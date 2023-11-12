import { Container } from "./style";


export function CreateContent(){
  return(
    <Container>
          <body>

          <menu>

<a href=""><img src="src/images/menus.png" alt="menu"/></a>
        <a href=""><img src="src/images/botao-home.png" alt="Home"/></a>
        <a href=""><img src="src/images/mortarboard.png" alt="Meus Cursos"/></a>
        <a href=""><img src="src/images/grafico-de-barras.png" alt="Minhas Notas"/></a>
        <a href=""><img src="src/images/brasil.png" alt="Idiomas"/></a>
        <a href=""><img src="src/images/configuracao.png" alt="Configuração"/></a>
</menu>


    <main>

    <nav>

<img id="logo" src="src/images/senai.png" alt="Logo do Senai"/>

    <div class="icons">

        <a href=""><img src="src/images/senai.png" alt="Enem"/>Enem</a>

        <a href=""><img src="src/images/provas.png" alt="Simulado"/>Simulado</a>

        <a href=""><img src="src/images/sinais-vitais.png" alt="Desempenho"/>Desempenho</a>

        <a href=""><img src="src/images/botao-play.png" alt="Aulas"/>Aulas</a>

        <a href=""><img src="src/images/pilha-de-tres-livros.png" alt="Material de apoio"/>Material <br/> de apoio</a>

    </div>

    <div class="nav-dir">

<button id="buscar"><img src="src/images/lupa.png" alt="Buscar"/></button>

<button id="perfil"><img src="src/images/perfil.jpg" alt="Perfil"/></button>

</div>




</nav>
        <hr/>
        
      <div class="corpo-pag">
    

        <form>

            <div class="input-wrapper">
                <label for="Titulo">Titulo:</label>
                <input id="Titulo" type="text" placeholder="Titulo" required/>
            </div>

            <div class="input-wrapper">
                <label for="link">Link do video:</label>
                <input id="link" type="text" placeholder="link" required/>
            </div>

            <div class="input-wrapper">
                <label for="descricao">Adicione uma descrição...</label>
                <textarea id="descricao" cols="30" rows="10" placeholder="Descreva..."></textarea>
            </div>
        
            <button>Postar aula</button>

        </form>

      </div>

    </main>

    </body>
    </Container>
  )

}