import React, {Component} from "react";
import '../css/login.css'

class Login extends Component {
    state={
        form:{
            name:'',
            pwd:''
        }
    }

    inputChange = async e=>{
        await this.setState({
            ...this.state.form,
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <section>
                <form action="" className="login">
                    <h1 className="login-title">LOG IN</h1> 
                    <p className="login-paragraph">¿Aún no tienes cuenta? <a href="/">Registrate!</a></p>
                        <div className="login-container">
                            <div className="login-group">
                                <label htmlFor="" className="login-label"></label>
                                <input type="text" name="name" onChange={this.inputChange} placeholder="Nombre" className="login-input" />
                            </div>
                            <div className="login-group">
                                <label htmlFor="" className="login-label"></label>
                                <input type="password" name="pwd" onChange={this.inputChange} placeholder="Contraseña" className="login-input" />
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
        
    
    
}
  
  export default Login