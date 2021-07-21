import React, {useState , useEffect} from 'react';
import axios from 'axios';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function UsersAgGrid() {
    const [data, getData]=useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => getData(res.data))
    },[])

    return (
    <div className="ag-theme-alpine" style={{height: 400, width: '90%', margin: '40px'}}>
        <AgGridReact
            rowData={data}  rowSelection="multiple" suppressDragLeaveHidesColumns={true} >
            <AgGridColumn field="id" sortable={ true } filter={ true } checkboxSelection={ true } floatingFilter= {true}></AgGridColumn>
            <AgGridColumn field="name" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="email" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="company.name" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="phone" sortable={ true } filter={ true } ></AgGridColumn>
            <AgGridColumn field="address.city" sortable={ true } filter={ true } ></AgGridColumn>
        </AgGridReact>
    </div>
    )
}

export default UsersAgGrid
