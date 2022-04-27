import { Link } from 'react-router-dom';
import './SignUp'
import './Login.css'
import Header from '../Header';
import {useState} from "react";
import store from '../../store';
import axios from "axios";
import {useHistory} from "react-router-dom";
//import singUp from "./signUp";
 import data from '../../assets/DB.json'
import { getAllUsers, getUserByEmail } from '../../utils/api';
import { useEffect } from 'react';
function Login() {
    const[username1, setUsername]=useState("");
    const[password1, setPassword]=useState("");
    const history = useHistory();
    let [userData, setUsersData1] = useState();
   
 const LoginUser=()=>{  
       
    Promise.resolve(
          
        getUserByEmail(username1).then(
            (i)=>{
              console.log(username1)
              console.log(i.data.data)
             setUsersData1(i.data.data)
            }
        ).catch((e)=>console.log('error in login ', e))
    )
        if (!userData) {
                store.dispatch({type:"loginFail"});
                alert('Login failed')
            }
        else{
            store.dispatch({type:"loginSuccess",payload:{email:userData.email,Uname:userData.Full_name}});
                    history.push("/");
        }
    };
    return (
        <>
        <div className="posfix"> <Header /></div>
            <div className="Login">
            <h1>LOGIN/SIGNUP</h1>
            
                <h2>USERNAME</h2>
                <input type="text" className="logintext" placeholder="enter username"  onChange={(e)=>setUsername(e.target.value)} required /><br />
        
                <h2>PASSWORD</h2>
                <input type="password" className="logintext" placeholder="enter password"  onChange={(e)=>setPassword(e.target.value)} required /><br /> <br />
                <button type="submit" className='sbutton' onClick={LoginUser}>Login</button>
                <h2> don't have account?</h2>
                <button class="cta">
                <span><Link className='signupbutton' to="/SignUp" >SignUp</Link></span>
                 <svg width="15px" height="10px" viewBox="0 0 13 10">
                 <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </button>
            </div>
        </>
    )
}
export default Login;