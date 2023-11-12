import {Routes , Route} from 'react-router-dom'
import { SignIn } from '../pages/signIn'
import { SignUp } from '../pages/signUp'
import { InitialChoose } from '../pages/initial'
export function AuthRoutes(){
  return(
    <Routes>
      <Route path='/' element ={ <InitialChoose />}/>
      <Route path='/login' element = {<SignIn />}/>
      <Route path='/register' element = {<SignUp />  } />
    </Routes>
  )

}