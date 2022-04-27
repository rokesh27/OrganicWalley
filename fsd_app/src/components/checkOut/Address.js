import { Link } from 'react-router-dom';
import './Address.css';
import { useState } from "react";
import axios from 'axios';
import CartHeader from '../CartHeader';
function Address() {
        const [Full_name , setName ]    = useState('')
        const [ Mobile, setNumber ]     = useState('')
        const [ email, setEmail ]     = useState('')
        const  [ Pincode, setPin ]       = useState('')
        const  [comAdd, setAdd ]         = useState('')
        const [Town , setTown]        = useState('')
        const  [District , setDistrict]  = useState('')
        const [State , setState]        = useState('')
        const [Home , setHome]         = useState('')
        const [Office , setOffice]        = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { Full_name , Mobile , email, Pincode , comAdd , Town , District , State , Home , Office }
        // fetch('http://localhost:8001/address',{
        //     method:'POST',
        //     headers:{'Content-Type':"application/json"},
        //     body:JSON.stringify(blog)
        // }).then(()=>{
        //     console.log('new address added')
        // })
        axios.post(
            `http://localhost:9000/api/address`,{
                "Full_name":Full_name,
                "Mobile":Mobile,
                "email":email,
                "Pincode":Pincode,
                "comAdd":comAdd,
                "Town":Town,
                "District":District,
                "State":State
            }).then(res => {
                console.log("successfully posted Address")
                  })
                  .catch(err => alert(err))
        }  
     
    return (
        <>
        <Link to="/admin">admin</Link>
         <CartHeader  headerName="C A R T " headerName1=" A D D R E S S " headerName2=" P A Y M E N T"/>
        <form onSubmit={handleSubmit}>
            <div className="Address">
                <h1>Address</h1>

                <h2>CONTACT DETAILS</h2>
                <input type="text" placeholder="Name*" name="Full_name"  value={Full_name}
            onChange={(e) => setName(e.target.value)}  className="addInf" required /><br></br>
                <input type="text" placeholder="Mobile No*"
                value={Mobile}
                onChange={(e) => setNumber(e.target.value)} name="Mobile" className="addInf" required /><br></br>
              <input type="email" placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)} name="email" className="addInf" required /><br></br>  
                
                <input type="text" placeholder="Pin Code*" name="Pincode" value={Pincode}
                        onChange={(e) => setPin(e.target.value)} className="addInf" required /><br></br>
                <input type="text" placeholder="Address (House No, Building, Street, Area)*" value={comAdd}
                        onChange={(e) => setAdd(e.target.value)} name="comAdd"
                    className="addInf" required /><br></br>
                <input type="text" placeholder="Locality/ Town*" name="Town"  value={Town}
                                    onChange={(e) => setTown(e.target.value)} className="addInf" required /><br></br>
                <input type="text" placeholder="City/ District*" name="Town" value={District}
                                    onChange={(e) => setDistrict(e.target.value)} className="addInf" required /><br></br>
                <input type="text" placeholder="State*" name="State" className="addInf" value={State}
                        onChange={(e) => setState(e.target.value)} required /><br></br>
                <label for="C1"> Home </label>
                <input type="Checkbox" Name="Home" className="C1"  value={Home}
                        onChange={(e) => setHome(e.target.value)} Value="Home" />
                <label for="C2"> Office </label>
                <input type="Checkbox" Name="Office" ID="C2" Value="Office"
                        value={Office}
                        onChange={(e) => setOffice(e.target.value)} /><br></br>
                <button type="submit"  className="paymentbtn">ADD ADDRESS</button>
                <Link to="/Credit"><button className="paymentbtn">proceed to buy</button></Link>
                <p>{Full_name}</p>
            </div>
            </form>
        </>

    )
}
export default Address;