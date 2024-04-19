import axios  from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users(){

const [users, setUsers] = useState([])

useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
}, [])


const handleDelete =(id) => {
    axios.delete('http://localhost:3001/deleteUser/' +id)
    .then(res =>{console.log(res)
    window.location.reload()})
    .catch(errr => console.log(errr))
}

    return(
        <div className="topic">
            
        <div className="d-flex vh-100 bg-primary justify-content-center align-item-center p-4 rounded ">
            <div className="w-100  bg-white rounded p-5">
            <h1>Student Details</h1>
                <Link to="/create" className="btn btn-success m-2">Add +</Link>
                <table className="table m-2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.address}</td>
                                    <td >
                                        <Link to={`/update/${user._id}`} className="btn btn-warning"> Edit </Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}> Delete </button>
                                    </td>
                                    
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}
export default Users;