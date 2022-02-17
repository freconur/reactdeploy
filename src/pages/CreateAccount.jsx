import React from 'react'

const CreateAccount = () => {
  return (
    <div>
      <form>
          <label>Correo</label>
          <input 
          placeholder='ingresa tu correo' 
          type='email'
          name="email"
          />
          <label>contrasenia</label>
          <input 
          placeholder='ingresa tu correo' 
          type='password'
          name="email"
          />
      </form>
    </div>
  )
}

export default CreateAccount
