import React, { Component } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies() 
class Profile extends Component {
    
    render(){
       console.log('name' + cookies.get('name'))
        return(
            <div>
                <h1>Bienvenido {cookies.get('name')}</h1>
                <img src={cookies.get('avatar')} width150px alt="" />
                <h3>{cookies.get('name')}</h3>
                <button>Movimientos</button>
                <button>Cerrar sesión</button>
            </div>
        )
    }      
}
export default Profile;