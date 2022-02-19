import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {
  
  const [error, setError] = useState();
  const [user, setUser] = useState({
    email: '',
    password:''
  });
    const navigate = useNavigate()
    const {signin} = useAuth();

    const handleChange = ({target:{name, value}}) => {
    setUser({...user, [name]:value})
    // console.log(e.target.name, e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signin(user.email, user.password)
      navigate("/user");
    } catch (error) {
      setError('Server Error')      
    }
  }
  return (
    <div>
      {error && <p>{error}</p>}
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
        <button >Registrate</button>
      </form>

      <div></div>
    </div>
  )
}

export default CreateAccount
