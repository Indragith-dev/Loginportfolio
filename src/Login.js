import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import email_icon from './components/assests/email.png'
import password_icon from './components/assests/password.png'
import { useState } from 'react'
import Validation from './LoginValidation'

const Login = () => {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const navigate = useNavigate();
   
    const [errors,setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev =>({...prev,[event.target.name]:[event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password ===""){
            navigate('/navbar');
      }
    }

  return (
    <div className='container'>
        <div className="header">
            <div className="text">Log In</div>
            <div className="underline"></div>
        </div>
        <form action='' onSubmit={handleSubmit}>
        <div className="inputs"> 
            <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder='Email Id' name='email' onChange={handleInput}/>
            </div>
            {errors.email && <span className='err'>{errors.email}</span>}
            <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder='Password' name='password' onChange={handleInput}/>
            </div>
            {errors.password && <span className='err'>{errors.password}</span>}
        </div>
        <div className="submit-container">
            <button type='submit' className="submit">Log In</button>
            <Link to='/Signup' className="submit-crt">Create New Account</Link>
        </div>
        </form>  
    </div>
  )
}

export default Login
