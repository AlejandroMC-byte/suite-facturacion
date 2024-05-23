import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export const LayoutClient = () => {
  return (
    <>
      <h1>CLIENTES</h1>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}
