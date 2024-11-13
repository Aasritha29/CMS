import React from 'react'
import '../assets/css/form.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Validation from '../Components/Validation'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useContext } from 'react'
import {UserContext} from "../App";
import Navbar from '../Components/Navbar'

const Login = () => {
  
   const [values,setValues]=useState({
    email:'',
    password:'',
   })
   const{user,setUser}=useContext(UserContext)
   const [errors,setErrors]=useState({})
   const[serverErrors,setServerErrors]=useState([])
   const navigate=useNavigate()
   
   const handleInput=(event)=>{
    setValues({...values,[event.target.name]:event.target.value})
   }
  

   
   const handleSubmit=(e)=>{
    e.preventDefault()
    
    const errs=Validation(values)
    setErrors(errs)
    if( errors.email==="" && errors.password==="" )
    {
        axios.post('http://localhost:3000/contactmsyt/login',values)
        .then(res=>{
            if(res.data.success)
            {
             toast.success("Login Successful",{
             position :"top-right",
             autoClose: 5000
             })
            localStorage.setItem("token",res.data.token)
            setUser(res.data.user)
             navigate('/dashboard')
            }
            
            
        }).catch(err=>{
            console.log(err)
            
              if(err.response.data.errors)
              {
              setServerErrors(err.response.data.errors)
              }
              else{
                console.log(err)
              }
        })
    }
   }
    return(
        
    <div className='form-container'>
        <form className="form" onSubmit={handleSubmit}>
            <h2>Login</h2>

            <div className="form-group">
                <label htmlFor='email' className='form-label'>Email:</label>
                <input type="text" placeholder="Enter Email" className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
            </div>
            {
                errors.email && <span className="error">{errors.email}</span>
            }


            <div className="form-group">
                <label htmlFor='password' className='form-label'>Password:</label>
                <input type="password" placeholder="Enter password" className='form-control' name='password' onChange={handleInput}/>
            </div>
            {
                errors.password && <span className="error">{errors.password}</span>
            }

            {
                serverErrors.length>0  &&(
                    serverErrors.map((error,index)=>(
                        <p className="error" key={index}>{error.msg}
                        </p>
                    ))
                )
            }
           <button className="form-btn">Login</button>
           <p>Dont't Have Account?<Link to="/register">Register</Link></p>
        </form>
    
    </div>
  )
}

export default Login

