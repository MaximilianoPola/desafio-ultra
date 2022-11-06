import React, { useEffect,useState } from "react";
import DataTable from 'react-data-table-component';
import 'styled-components'
import '../css/transaction.css'

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

    //Configuracion de columnas
    const columns = [

        {
            name: 'NUMERO DE OPERACION',
            selector: row => row.id,
            
        },
        {
            name: 'FECHA',
            selector: row => row.createdAt,
            
        },
        {
            name: 'MONTO',
            selector: (row) => <p >$ {row.amount}</p>
        },
        {
            name: 'DESCRIPCION',
            selector: row => row.description,
            grow: 3
        }
    ]

    // const paginacion = {
    //     rowsPerPageText: 'Filas por página',
    //     rangeSeparatorText: 'de',
    //     selectAllRowsItem: true,
    //     selectAllRowsItemText: 'Todos'
    // }

    return(
        <div className="transaction">
            <div className="responsive">
               <h1>Actividad Reciente</h1>

                <DataTable 
                className="dataTable"
                columns ={columns}
                data ={transactions}
                // pagination
                // paginationComponent={paginacion}
                // fixedHeaderScrollHeight
                /> 
            </div>
            
        </div>
    )
}
export default Transaction