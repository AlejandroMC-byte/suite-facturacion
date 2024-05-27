import React from 'react'
import '../../css/Footer.css'
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image">
              <a href="https://simde.com.co">
                <img
                  src="https://simde.com.co/wp-content/uploads/2021/01/Logo.png"
                  alt="SIMDE Logo"
                />
              </a>
            </div>
            <div className="social-icons d-flex">
              <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
              <a href="tel:3104674735" className="icon"><i className="fab fa-whatsapp"></i></a>
            </div>
          </div>
          <div className="col-md-6 contact-info">
            <ul>
              <li>
                <i className="fas fa-phone"></i> <a href="tel:3104674735">310 467 4735</a>
              </li>
              <li>
                <i className="fas fa-clock"></i> Lunes a viernes 8AM - 5PM
              </li>
              <li>
                <a href="mailto:administrativo@simde.com.co">
                  <i className="fas fa-envelope"></i> administrativo@simde.com.co
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/SIMDE+SAS/@3.4485917,-76.5366572,17z/data=!3m1!4b1!4m5!3m4!1s0x8e30a7f3df2db2c9:0xa4a6194aa6e2a1b5!8m2!3d3.4485955!4d-76.5344493" target="_blank">
                  <i className="fas fa-map-marker-alt"></i> Carrera 39a # 5d-35 Cali, Colombia
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <p>© 2021 SIMDE S.A.S | TODOS LOS DERECHOS RESERVADOS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
