import React from 'react'

const CreateAccount = () => {
  return (
    <div>
      <form>
        <div>
          <label>Correo</label>
          <input 
          placeholder='ingresa tu correo' 
          type='email'
          name="email"
          />
        </div>
        <div>
          <label>contrasenia</label>
          <input 
          placeholder='ingresa tu correo' 
          type='password'
          name="email"
          />
        </div>
      </form>
    </div>
  )
}

export default CreateAccount
