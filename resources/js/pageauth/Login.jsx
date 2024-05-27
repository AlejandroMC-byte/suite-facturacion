import React, { useState , useEffect } from 'react'
import Config from '../Config'
import { Navigate, useNavigate } from 'react-router-dom'
import AuthUser from './AuthUser'

const Login = () => {
  const {getToken} = AuthUser()
  const [password,setPassword] = useState("")
  const [email,setEmail] = useState("")
  const [message,setmessage] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    if (getToken()) {
      navigate("/")
    }
  },[])
  const submitLogin = async(e) =>{
    e.preventDefault();
    Config.getLogin({email,password})
    .then(({data})=>{
      if(data.success){
        // navigate("/login")
        console.log(data)
      }else{
        console.log(data)
      }
    })
  }
  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="card mt-5 mb-5">
            <div className="card-body">
              <h1 className='text-center fw-bolder'>INGRESO</h1>

              <input type="email" className="form-control mt-3" placeholder='Email:' value={email} onChange={(e)=>setEmail(e.target.value)} required/>

              <input type="password" className="form-control mt-3" placeholder='Password:' value={password} onChange={(e)=>setPassword(e.target.value)} required/>

              <button onClick={submitLogin} className='btn btn-primary w-100 mt-3'>ENVIAR</button>
              <p className='text-center mt-3'>Primera vez... comunicarse con su proveedor para registrarse</p>
              <a href="/register" className="btn btn-primary w-100 mt-3">REGISTRO</a>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Login