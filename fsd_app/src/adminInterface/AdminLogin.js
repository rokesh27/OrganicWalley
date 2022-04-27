import AdminNavbar from "./AdminNavbar"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
function AdminLogin() {
    const[username1, setUsername]=useState("admin");
    const[password1, setPassword]=useState("admin");
    const history = useHistory();
   
    let flag=0

    const LoginUser=()=>{

      
            if (username1 == 'admin' && password1 == 'admin') {
                
                    history.push("/adminNavbar");
                    flag=1
                    
            } 
        
        else{
           
            alert('Login failed')
        }
       

      

    };
    return (
        <>
       
            <div className="Login">
            <h1>LOGIN</h1>
            
                <h2>USERNAME</h2>
                <input type="text" className="logintext" placeholder="enter username"  onChange={(e)=>setUsername(e.target.value)} required /><br />
        
                <h2>PASSWORD</h2>
                <input type="password" className="logintext" placeholder="enter password"  onChange={(e)=>setPassword(e.target.value)} required /><br /> <br />
                <button type="submit" className='sbutton' onClick={LoginUser}>Login</button>
                <h2> don't have account?</h2>
                <button class="cta">
                
                 <svg width="15px" height="10px" viewBox="0 0 13 10">
                 <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
            </div>
        </>
    )
}
export default AdminLogin;