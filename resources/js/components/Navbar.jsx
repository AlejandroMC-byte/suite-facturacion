import React from 'react'
import '../../css/Navbar.css'
import AuthUser from '../pageauth/AuthUser'
import Config from '../Config'
export const Navbar = () => {
  const  {getRol,getToken, getLogout} = AuthUser()
  const logoutUser = () =>{
    Config.getLogout('/logout')
    .then(response=>{
      console.log(response)
      getLogout();
    })
  }
  const renderLinks = () =>{
    if(getToken()){
      return(
        <>
        <li className="nav-item">
          <a className="nav-link" href={`/${getRol()}`} >Administracion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={logoutUser}>Salir</a>
        </li>
        </>
      )
    }else{
      return(
        <>
        <li className="nav-item">
          <a className="nav-link" href="/login">Ingresar</a>
        </li>
        </>
      )
    }
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">FACTSIMDE</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">PRINCIPAL</a>
              </li>
              {renderLinks()}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Empresas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Empresa 1</a></li>
                  <li><a className="dropdown-item" href="#">Empresa 2</a></li>   
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}
