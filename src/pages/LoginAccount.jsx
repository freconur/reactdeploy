import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const LoginAccount = () => {
    const [user, setUser] = useState({
        email: '',
        password:''
    });
    const navigate = useNavigate()
    const {login} = useAuth();
    const [error, setError] = useState();  
  
      const handleChange = ({target:{name, value}}) => {
      setUser({...user, [name]:value})
      // console.log(e.target.name, e.target.value)
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      // setError('')
      try {
        await login(user.email, user.password)
        navigate("/");
      } catch (error) {
        // if (error.code ===)
        setError('error de correo o contrasenia')
      }
    }
    return (
      <div>
        {error && <p>{error}</p> }
  
        <form onSubmit={handleSubmit}>
          <div>
            <label>Correo</label>
            <input 
            placeholder='ingresa tu correo' 
            type='email'
            name="email"
            onChange={handleChange}
            />
          </div>
          <div>
            <label>contrasenia</label>
            <input 
            placeholder='***********' 
            type='password'
            name="password"
            onChange={handleChange}
            />
          </div>
          <button >Login</button>
        </form>
  
        <div></div>
      </div>
    )
}

export default LoginAccount
