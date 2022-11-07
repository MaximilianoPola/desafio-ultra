import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies() 

class Profile extends Component {
    //Funcion para cerrar sesión y redirigir a login
    logout = () =>{
        cookies.remove('name',{path: "/"})
        cookies.remove('avatar',{path: "/"})
        window.location.href='./'
    }
    //En la renderizacion del componente si no encuentra la cookie redirige al login
    componentDidMount(){
        if(!cookies.get('name')){
            window.location.href='/'
        }
    }

    render(){
       console.log('name' + cookies.get('name'))
        return(
            <div>
                <h1>Bienvenido {cookies.get('name')}</h1>
                <img src={cookies.get('avatar')} width150px alt="" />
                <h3>{cookies.get('name')}</h3>
                <button>Movimientos</button>
                <button onClick={() => this.logout()}>Cerrar sesión</button>
            </div>
        )
    }      
}
export default Profile;