import {Routes , Route} from 'react-router-dom'
import {StudentMenu} from '../pages/student-menu'
import { CursoStudent} from '../pages/my-classes-student'
import { InsideClassroom} from '../pages/inside-classroom-student'

export function StudentRoutes(){
  return(
    <Routes>
      <Route path='/' element= {<StudentMenu />}/>
      <Route path='/my-classes' element= {<CursoStudent />}/>
      <Route path='/inside-classroom' element= {<InsideClassroom />}/>

    </Routes>
  )

}