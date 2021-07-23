import React from 'react'
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Logout() {
    const history = useHistory()
    const {logout} = useAuth0();
    const handleLogout = ()=>{
        logout();
        history.push("/login");
    }
    return (
        <div>
            <Button className= "logout-button" variant="primary" onClick = {handleLogout}>Logout</Button>
        </div>
    )
}

export default Logout
