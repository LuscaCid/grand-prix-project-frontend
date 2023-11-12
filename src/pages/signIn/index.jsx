import { Link } from 'react-router-dom'
import {Container} from './style'
import { useState } from 'react'
import { useAuth } from '../../hooks/authProvider'



export const SignIn = ()=> {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signIn} = useAuth()
  return (
    <Container>
    <body>
        
        <div class="login">

            <img src="src/images/logo-site.jpg" alt="Tech life"/>

            <h1>Login</h1>

            <form action="">
                <div class="input-wrapper">
                    <label for="login">Login:</label>
                    <input onChange={e=> setEmail(e.target.value)} id="login" type="email" placeholder="E-mail" required/>
                </div>

                <div class="input-wrapper">
                    <label for="senha">Senha:</label>
                    <input onChange={e=> setPassword(e.target.value)} id="senha" type="password" placeholder="Senha" required/>
                </div>
                
                <div class="cadastro">
                    <a href="./cadastro.html">Não possui um login?</a>
                </div>


                <button onClick={e => {
                    e.preventDefault()
                    signIn({email, password})
                    }}>Entrar</button>
            </form>

        </div>
    </body>
    </Container>
  )
}