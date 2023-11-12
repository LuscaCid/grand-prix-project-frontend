import {BrowserRouter} from 'react-router-dom'

import { StudentRoutes } from './student.routes'
import { AuthRoutes } from './auth.routes'
import { TeacherAppRoutes } from './teacher.routes'
import { useAuth } from '../hooks/authProvider'
export function Routes (){
  const {user} = useAuth()
  return (
    <BrowserRouter>
      {user ?  <StudentRoutes /> : <AuthRoutes />}
    </BrowserRouter>

  )
}