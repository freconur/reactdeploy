import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';


const CreateAccount = () => {
  const [user, setUser] = useState({
    email: '',
    password:''
  });
    const {create} = useAuth();

    const handleChange = ({target:{name, value}}) => {
    setUser({...user, [name]:value})
    // console.log(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    create(user.email, user.password)
  }
  return (
    <div>
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
          placeholder='ingresa tu correo' 
          type='password'
          name="password"
          onChange={handleChange}
          />
        </div>
        <button >Registrate</button>
      </form>
    </div>
  )
}

export default CreateAccount
