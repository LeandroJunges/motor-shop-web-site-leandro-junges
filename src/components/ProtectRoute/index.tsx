import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { UserContext } from "../../context/userContext"

const ProtectRoute=()=>{
  const {user, loading} = useContext(UserContext)

  if(loading){

    return <div>Carregando...</div>

  }
  return user? <Outlet /> : <Navigate to="/" replace />

}

export default ProtectRoute