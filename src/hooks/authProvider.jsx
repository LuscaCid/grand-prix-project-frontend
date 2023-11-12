import { useState, createContext, useEffect, useContext } from "react";

import { api } from "../services/api"
const AuthContext = createContext({})

function AuthProvider({children}){
  
  const [data , setData] = useState({})
  const [isStudent, setIsStudent] = useState()
  let [isVisible, setIsVisible] = useState(false)
  
  async function signIn({email, password}){
    
    try{
      
      const res = await api.post('/sessions', {email , password })

      const { user, token } = res.data
      api.defaults.headers.authorization = `Bearer ${token}`
      console.log(user.name)
      localStorage.setItem('@Senai:user', JSON.stringify(user))
      localStorage.setItem('@Senai:token', token)
      
      setData({user , token})
      
    } catch (error) {
      if(error.response) alert(error.response.data.message)
      else alert('não foi possivel fazer login')
    }
  }
  
  function signOut(){
    localStorage.removeItem('@Senai:user')
    localStorage.removeItem('@Senai:token')
    setData({})
  }
  
  useEffect(()=>{
    const user = localStorage.getItem('@Senai:user') 
    const token =  localStorage.getItem('@Senai:token')
    if(token && user) {
      
      setData({
        user : JSON.parse(user),
        token
      })
    }

  }, [])


  return (
    <AuthContext.Provider value = {{
      setIsStudent,
      signOut, 
      signIn,
      user : data.user}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
  const context = useContext(AuthContext)
  return context
}

export { AuthProvider, useAuth}