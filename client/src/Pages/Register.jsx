import React from 'react'
import '../assets/css/form.css'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Validation from '../Components/Validation'
import axios from 'axios'
import {toast} from 'react-toastify'
import Navbar from '../Components/Navbar'


const Register = () => {
     const [values,setValues]=useState({
     name:'',
     email:'',
     password:'',
   })

   const [errors,setErrors]=useState({})
   const[serverErrors,setServerErrors]=useState([])
   //used to get the navigate function
   const navigate=useNavigate()

   const handleInput=(event)=>{
   //used to update required data
    setValues({...values,[event.target.name]:event.target.value})
   }

   //handleSubmit after clicking registration button
   const handleSubmit=(e)=>{
         //prevent default submission of the form
         e.preventDefault()
         const errs=Validation(values)
         setErrors(errs)
         //no error
         if(errs.name==="" && errs.email==="" && errs.password==="" )
         {
               // we post the data  
               axios.post('http://localhost:3000/contactmsyt/register',values)
               .then(res=>{
               //if success..account is created
               if(res.data.success)
               {
                   toast.success("Account Created Successfully",{
                   position :"top-right",
                   autoClose: 5000
                   })
                   //after successful registration ,navigate to login page
                  navigate('/login')
               }
              //if not success...display server side errors
            }).catch(err=>{
               if(err.response.data.errors)
               {
                  setServerErrors(err.response.data.errors)
               }
               else
               { 
                console.log(err);
               }
            })
       }
   }

    //Registration Form includes name,email,password
    return(
        //Registration form
        <div className='form-container'>
            
            <form className="form" onSubmit={handleSubmit}>
                 <h2>Create Account</h2>

                 <div className="form-group">
                     <label htmlFor='name' className='form-label'>Name:</label>
                     <input type="text" placeholder="Enter Name" className='form-control' name='name'  onChange={handleInput}/>
                  </div>
                  {
                      errors.name && <span className="error">{errors.name}</span>
                  }


                 <div className="form-group">
                       <label htmlFor='email' className='form-label'>Email:</label>
                       <input type="email" placeholder="Enter Email" className='form-control' name='email' autoComplete='off'
                        onChange={handleInput}/>
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
                        //Display the error messages present in the servererror array
                        serverErrors.length>0  &&(
                        serverErrors.map((error,index)=>(
                        <p className="error" key={index}>{error.msg}
                        </p>
                        ))
                        )
                    }
                    <button className="form-btn">Register</button>
                     <p>Already Registered? <Link to="/login">Login</Link></p>
         </form>
    
    </div>

  )
}

export default Register
