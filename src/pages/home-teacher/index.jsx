import { Container } from "./style"


export const HomeTeacher = ()=> {
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

            <div class="info">

                <div class="apresentacao">
            
                <h2>Olá Lucas!</h2>
            
            
                <img src="src/images/robozin.png" alt="Robo acenando"/>
            
                </div>
            
                <div class="continue-aprendendo">
            
                    <h2 id="insentivo">Continue ensinando...</h2>
            
            
                    <div class="cursos">
            
                        <a href="../routes/curso.html"><img src="src/images/Tecnico-enfermagem.jpg" alt="Enfermeira examinando uam paciente"/><span>Técnico de Enfermagem</span></a>
            
                    </div>
            
                </div>
            
                <div class="aluno">
                    <p>Cursos<span>1</span></p>
                    <p>Alunos<span>55</span></p>
                    <p>Aulas<span>4/24</span></p>
                </div>
            
            
            </div>
            
            <div class="conteudo">
            
            
                <div class="revisao">
            
                    <h6>Vamos corrigir?</h6>
            
                    <div class="materias">
            
                        <div class="caixa-materia">
            
                            <span>Português</span>
                            <p>50/55</p>
            
                        </div>
            
                        <div class="caixa-materia">
            
                            <span>Física</span>
                            <p>12/55</p>
            
                        </div>
            
                        <div class="caixa-materia">
            
                            <span>Química</span>
                            <p>20/55</p>
            
                        </div>
            
                    </div>
            
                </div>
            
                <div class="calendario">
            
                    <h6>Novembro</h6>
            
                    <table border=".5" cellspacing="0">
            
                        <tr>
            
                            <th>
                                D
                            </th>
            
                            <th>
                                S
                            </th>
            
                            <th>
                                T
                            </th>
            
                            <th>
                                Q
                            </th>
            
                            <th>
                                Q
                            </th>
            
                            <th>
                                S
                            </th>
            
                            <th>
                                S
                            </th>
                        
                        </tr>
            
            
                        <tr>
            
                            <td><span>29</span></td>
            
                            <td><span>30</span></td>
            
                            <td><span>31</span></td>
            
                            <td><button>1</button></td>
            
                            <td><button>2</button></td>
            
                            <td><button>3</button></td>
            
                            <td><button>4</button></td>
            
                        </tr>
            
                        <tr>
            
                            <td><button>5</button></td>
            
                            <td><button>6</button></td>
            
                            <td><button>7</button></td>
            
                            <td><button>8</button></td>
            
                            <td><button>9</button></td>
            
                            <td><button>10</button></td>
            
                            <td><button>11</button></td>
            
                        </tr>
            
                        <tr>
            
                            <td><button>12</button></td>
            
                            <td><button>13</button></td>
            
                            <td><button>14</button></td>
            
                            <td><button>15</button></td>
            
                            <td><button>16</button></td>
            
                            <td><button>17</button></td>
            
                            <td><button>18</button></td>
            
                        </tr>
            
                        <tr>
            
                            <td><button>19</button></td>
            
                            <td><button>20</button></td>
            
                            <td><button>21</button></td>
            
                            <td><button>22</button></td>
            
                            <td><button>23</button></td>
            
                            <td><button>24</button></td>
            
                            <td><button>25</button></td>
            
                        </tr>
            
                        <tr>
            
                            <td><button>26</button></td>
            
                            <td><button>27</button></td>
            
                            <td><button>28</button></td>
            
                            <td><button>29</button></td>
            
                            <td><button>30</button></td>
            
                            <td><span>1</span></td>
            
                            <td><span>2</span></td>
            
                        </tr>
            
                    </table>
            
                </div>
            
            </div>

            </div>
        </main>

        <button id="jojo"><img src="src/images/robo.jpg" alt="Ajuda"/></button>

        </body>

    </Container>
  )

}