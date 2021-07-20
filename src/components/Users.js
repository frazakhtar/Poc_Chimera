import React, {useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
    const [data, getData]=useState([]);
    const [userName, setUserName]= useState(" ");

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => getData(res.data))
    },[])


    const handleChange= (e)=>{
            setUserName(e.target.value);
    }

   

    return (  
       
        <div className="userContainer">
            <input style = {{margin: 30}} type = "text" placeholder= "Enter UserName" onChange= {handleChange} />
                <br/>
    
            <h1 style = {{margin: 30}} > User Data </h1>
           
            <ul>
                   {data.filter((val)=> {if (userName==" "){
                       return val;
                   }else if(val.name.toLocaleLowerCase().includes(userName.toLocaleLowerCase())){
                       return val;
                   }
                }
                 ).map((res)=><li style = {{listStyle: 'none'}}>{res.name} </li>)}
            </ul>
            
           
            
        </div>
    )
}

export default Users
