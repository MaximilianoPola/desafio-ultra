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
            className: 'numOperation'
        },
        {
            name: 'FECHA',
            selector: row => row.createdAt,
            className: 'date'
        },
        {
            name: 'MONTO',
            selector: (row) => <p >$ {row.amount}</p>,
            className: 'amount'
        },
        {
            name: 'DESCRIPCION',
            selector: row => row.description,
            grow: 3,
            className: 'description'
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
                fixedHeaderScrollHeight="300px"
                responsive
                // pagination
                // paginationComponent={paginacion}
                // fixedHeaderScrollHeight
                /> 
            </div>
        </div>
    )
}
export default Transaction