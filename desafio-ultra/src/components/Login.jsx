import React, { Component} from "react";
import '../css/login.css'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();
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
    //Manipulacion de elementos del dom para mostar validaciones
    


    //Consumo de api con axios
    handleButton= async()=>{
       const apiUser= 'https://635fe51f3e8f65f283be4b05.mockapi.io/users'
       await axios.get(apiUser,{params: {name: this.state.form.name, password: this.state.form.pwd}})
       .then(response=>{
            return response.data;
        })
        .then(response=>{
            if(response.length>0){
                let res = response[0];
                cookies.set('name', res.name, {path: '/'});
                cookies.set('avatar', res.avatar, {path: '/'});
                window.location.href='./profile';
            }else{
                this.errorMsg = 'Datos incorrectos'
            }
        })
        .catch(error =>{
            console.log(error)
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
                                <input type="text"  name="name" onChange={this.inputChange} placeholder="Nombre" className="login-input" />
                            </div>
                            <div className="login-group">
                                <label htmlFor="" className="login-label"></label>
                                <input type="password" name="pwd" onChange={this.inputChange} placeholder="Contraseña" className="login-input" />
                            </div>
                            
                                <button type="submit" className="login-submit" onClick={()=>this.handleButton()}>Ingresar</button>  
                        </div>        
                </form>
            </section>
        ); 
    }
                       
}
  
  export default Login