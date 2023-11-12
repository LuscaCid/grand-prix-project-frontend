import { Container } from "./style";

export function AddContent(){
  return (

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

        <h1>Técnico de Enfermagem</h1>

        <table cellspacing="0">

            <tr>

                <td>
                    <a href="./aula.html">Aula 01 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                </td>

            </tr>

            <tr>

                <td>
                    <a href="./aula.html">Aula 02 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                </td>

            </tr>

            <tr>

                <td>
                    <a href="./aula.html">Aula 03 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                </td>

            </tr>

            <tr>

                <td>
                    <a href="./aula.html">Aula 04 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a>
                </td>

            </tr>

        </table>

        <div class="adc-mais">
            <a id="add" href="./adcAula.html"><img src="src/images/mais.png" alt="Adico=ionar curso"/>Adicionar Curso</a>
        </div>

    </div>


    </main>

    <button id="jojo"><img src="src/images/robo.jpg" alt="Ajuda"/></button>



    </body>
    </Container>
  )

}