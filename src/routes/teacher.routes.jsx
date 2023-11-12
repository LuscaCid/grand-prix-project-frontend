import {Routes , Route} from 'react-router-dom'

import { HomeTeacher} from '../pages/home-teacher'
import {AddContent} from '../pages/create-classes-teacher'
import { CreateContent } from '../pages/add-content'

export function TeacherAppRoutes(){
  return(
    <Routes>
      <Route path='/home-teacher' element = {<HomeTeacher />} />
      <Route path='/add-classroom' element = {<AddContent />}/>
      <Route path='/add-content' element = {<CreateContent />}/>
    </Routes>
  )

}