import React, { useEffect,useState } from "react";
import DataTable,{createTheme} from 'react-data-table-component';
import 'styled-components'

function Transaction () {

    //configuramos los hooks
    const [transactions, setTransactions] = useState([])

    //Datos de api
    const api = 'https://635fe51f3e8f65f283be4b05.mockapi.io/users/1/transactions'
    const mostrarDatos = async () => {
       const response = await fetch(api)
       const data     = await response.json() 
       console.log(data);
       setTransactions(data)
    }

    useEffect( () => {
        mostrarDatos()
    }, [])

    const columns = [

        {
            name: 'NUMERO DE OPERACION',
            selector: row => row.id
        },
        {
            name: 'MONTO',
            selector: row => row.amount
        },
        {
            name: 'DESCRIPCION',
            selector: row => row.description
        }
    ]


    return(
        <div>
            <h1>Actividad</h1>

            <DataTable 
            columns ={columns}
            data ={transactions}
            />
        </div>
    )
}
export default Transaction