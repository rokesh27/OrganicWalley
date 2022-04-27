import "./Login.css"
import { useState,useEffect } from "react";
import data from '../../assets/DB.json'
import {useHistory} from "react-router-dom";
import axios from "axios";
function SignUp(){
        const [Full_name , setName ] = useState('')
        const [email , setEmail ] = useState('')
        const [psw , setPassword ] = useState('')
        const history = useHistory();
        let usersData = data.Users
        let flag=0
        
    const HandleSubmit = (e) => {
        // usersData.forEach(item => {
        //     if(email==item.email){
        //         alert("user already exist please login")
        //         flag =1
        //         history.push("/Login");
        //     }
        // });
        e.preventDefault();
        const blog = { Full_name , email , psw }

        // fetch('http://localhost:8001/users',{
        //     method:'POST',
        //     headers:{'Content-Type':"application/json"},
        //     body:JSON.stringify(blog)
        // }).then(()=>{    
        //     console.log('new address added')
        // })
        // history.push("/Login");


            
                axios.post(
                    `http://localhost:9000/api/user`,{
                        "Full_name":Full_name,
                        "email":email,
                        "psw":psw

                    }).then(res => {
                        console.log("successfully posted")
                          })
                          .catch(err => alert(err))
                          history.push("/");
        }  
     
        

    return(
        <>
         <form onSubmit={HandleSubmit} method="POST" action="/Login">
        <div className="signUp">
        <h1>SIGNUP</h1>

            <h2>FULL NAME</h2>
        <input type = "text"  className="logintext" placeholder="Full name" name="Full_name" value={Full_name} onChange={(e) => setName(e.target.value)}  required/>
           <h2>EMAIL</h2>
        <input type = "email" className="logintext" placeholder="Email" name="email" value={email}  onChange={(e) => setEmail(e.target.value)}  required/>
          <h2>PASSWORD</h2>
        <input type = "password"className="logintext" placeholder="enter password" name="psw" value={psw} onChange={(e) => setPassword(e.target.value)}  required/>
        <input type= "submit"
      
        className="sbutton" value="Create account"/>
        </div>
        </form>
        </>

    )   
}
export default SignUp;