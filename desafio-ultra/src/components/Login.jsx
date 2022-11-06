import React, { Component, useEffect, useState} from "react";
import '../css/login.css'
import axios from 'axios'



class Login extends Component {

    //Estado para capturar el change de los input del formulario
    state={
        form:{
            'name':'',
            'pwd':''
        },
        error:false,
        errorMsg:''
    }

    handleSubmit = e =>{
        e.preventDefault()
    }

    inputChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
        })
        // console.log(this.state.form);
    }
    //Consumo de api con axios
    handleButton=()=>{
       const apiUser= 'https://635fe51f3e8f65f283be4b05.mockapi.io/users'
       axios.post(apiUser,this.state.form)
       .then(response=>{
        console.log(response)
       })
    }

    render(){
        return (
            <section>
                <form onSubmit={this.handleSubmit} className="login">
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
                                <button type="submit" className="login-submit" onClick={this.handleButton}>Ingresar</button>  
                        </div>        
                </form>
            </section>
        ); 
    }
                       
}
  
  export default Login