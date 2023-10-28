import React from 'react'
import './Login.css'
import email_icon from './components/assests/email.png'
import password_icon from './components/assests/password.png'
import person_icon from './components/assests/person.png'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './SignupValidation'
import { useState } from 'react'

const Signup = () => {

  const [values,setValues] = useState({
    name: '',
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
    if(errors.name ==="" && errors.email === "" && errors.password ===""){
          navigate('/');
    }
}
  return (
    <div className='container-signup'>
      <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
      </div>
      <form action='' onSubmit={handleSubmit}>
      <div className="inputs">
           <div className="input">
              <img src={person_icon} alt="" />
              <input type="text" placeholder='Full Name' name='name' onChange={handleInput} />
          </div>
          {errors.name && <span className='err'>{errors.name}</span>}
          <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder='Email Id' name='email' onChange={handleInput} />
          </div>
          {errors.email && <span className='err'>{errors.email}</span>}
          <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder='Password'name='password' onChange={handleInput} />
          </div>
          {errors.password && <span className='err'>{errors.password}</span>}
          <span className='input-terms'>You agree to our terms and conditions</span>
          <div className="submit-container-signup">
            <button type='submit' className="submit">Sign In</button>
            <Link to='/' className="submit">Log In</Link>
        </div>
      </div>
      </form>
     </div>
  )
}

export default Signup

