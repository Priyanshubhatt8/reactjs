import React,{useState}from 'react'
function Users()
{
    const[user,setUser]=useState([
        {name:'bhatt',age:88},
        {name:'vinay',age:83},
        {name:'akash',age:82},
         {name:'jujhar',age:80},
        {name:'ashish',age:78},
    ])
    return (
        <div>
            <h1>User listing is here</h1>
           {
            user.length===4?<div>yes, THis is right</div>:<div>No length should be five</div>
            
           }
        </div>
    )
}
export default Users