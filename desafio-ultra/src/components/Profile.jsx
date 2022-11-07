import React, { Component } from "react";
import {Link} from 'react-router-dom'
import Cookies from "universal-cookie";
import '../css/profile.css'

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
            <div className="profile-box" >
                <div className="profile-card">
                <h1 className="profile-title">Bienvenido {cookies.get('name')}</h1>
                <img className="profile-avatar" src={cookies.get('avatar')} width150px alt="" />
                <h3>{cookies.get('name')}</h3>

                <Link to= './transaction'><button className="profile-button" >Movimientos</button> </Link>
                <button className="profile-button" onClick={() => this.logout()}>Cerrar sesión</button>
                </div>
            </div>
        )
    }      
}
export default Profile;