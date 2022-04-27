import data from '../assets/DB.json'
import AdminNavbar from './AdminNavbar.js'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { getAddress, getAllUsers } from '../utils/api'
import { useEffect, useState } from 'react'
const Users = ()=> {
    
    const [UserData, setUsersData1] = useState([]);
    useEffect(() => {
      Promise.resolve(
          getAllUsers().then((res)=>res.data).then(
              (i)=>{
                  console.log(i)
                  setUsersData1(i.data)
              }
          )
      )}, [])

      const [Address, setAddress] = useState([]);
    useEffect(() => {
      Promise.resolve(
          getAddress().then((res)=>res.data).then(
              (i)=>{
                  console.log(i)
                  setAddress(i.data)
              }
          )
      )}, [])
    return (
        <>
            <AdminNavbar />
            <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Users
  </Button></div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>Email ID</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        UserData.map((c) =>

                            <tr>
                                <td>{c.id}</td>
                                <td>{c.Full_name}</td>
                                <td>{c.email}</td>
                            </tr>

                        )
                    }
                </tbody>
            </Table>

            <div className="d-grid gap-2">
  <Button variant="primary" size="lg">
    Adress of Users
  </Button></div> 
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>Mobile Number</th>
                        <th>Email</th>
                        <th>Pincode</th>
                        <th>common Address</th>
                        <th>Town</th>
                        <th>District</th>
                        <th>State</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        Address.map((a) =>
                            <tr>
                                <td>{a.Full_name}</td>
                                <td>{a.Mobile}</td>
                                <td>{a.email}</td>
                                <td>{a.Pincode}</td>
                                <td>{a.comAdd}</td>
                                <td>{a.Town}</td>
                                <td>{a.District}</td>
                                <td>{a.State}</td>
                                

                            </tr>

                        )
                    }



                </tbody>
            </Table>

        </>
    )
}
export default Users