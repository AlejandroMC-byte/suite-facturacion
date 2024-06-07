import React from 'react'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'
import LayoutPublic from './layouts/LayoutPublic';
import PageHome from './pagepublic/PageHome';
import { LayoutAdmin } from './layouts/LayoutAdmin';
import ProtectedRoutes from './pageauth/ProtectedRoutes';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { LayoutClient } from './layouts/LayoutClient';
//auth
import Login from './pageauth/Login';
import Register from './pageauth/Register';
import Panel from './pageadmin/PanelAdmin';
import PanelAdmin from './pageadmin/PanelAdmin';
import PanelClient from './pageclient/PanelClient';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route index element = {<PageHome/>} />
          <Route path ='/login' element={<Login/>} />
          <Route path ='/register' element={<Register/>} />
        </Route>
        <Route element={<ProtectedRoutes/>}>
          <Route path="/admin" element={<LayoutAdmin/>}>
            <Route index element = {<PanelAdmin/>} />
          </Route>
          <Route path="/client" element={<LayoutClient/>}>
            <Route index element = {<PageHome/>} />
            <Route index element = {<PanelClient/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App

if (document.getElementById('root')) {
  const Index = ReactDOM.createRoot(document.getElementById("root"));

  Index.render(
      <React.StrictMode>
          <App/>
      </React.StrictMode>
  )
}