import React from "react";
import '../css/login.css'

function Login() {
    return (
      <section>
      <form action="" className="login">
          <h1 className="login-title">LOG IN</h1> 
          <p className="login-paragraph">¿Aún no tienes cuenta? <a href="/">Registrate!</a></p>
              <div className="login-container">
                  <div className="login-group">
                      <label htmlFor="" className="login-label"></label>
                      <input type="text" name="name" placeholder="Nombre" className="login-input"/>
                  </div>
                  <div className="login-group">
                      <label htmlFor="" className="login-label"></label>
                      <input type="password" name="pwd" placeholder="Contraseña" className="login-input"/>
                  </div>
                  <div className="login-group">
                      <label htmlFor="" className="login-label">Recordar usuario</label>  
                      <input type="checkbox" name="remember" id="remember" className="login-input"/>
                  </div>
                      <button type="submit" className="login-submit">Ingresar</button>  
              </div>        
      </form>
  </section>
    );
  }
  
  export default Login