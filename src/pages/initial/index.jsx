import { Link } from "react-router-dom";
import { Container } from "./style";
import { useState } from "react";
import { useAuth } from "../../hooks/authProvider";

export const InitialChoose = ()=> {
  const {setIsStudent} = useAuth()
  return (
    <Container>
  <body>
    
    <main>

        <h1>Quem deseja fazer login?</h1>
        <Link to='/login'>
            <button onClick={setIsStudent(true)}>
            

            <img src="src/images/alunos.png" alt="Aluno"/>
            <span>Aluno</span>
            </button>

          </Link>
         

        <p>ou</p>
        <Link to='/login'>
        <button onClick={setIsStudent(false)}>
          <img src="src/images/professor.png" alt="Professor"/>
          <span>Professor</span>
          </button>

        </Link>
        
    </main>

  </body>

    </Container>

  )
}