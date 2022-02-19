import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const UserDashBoard = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('');
    const { user, logout } = useAuth();

    const handleLogout = async () => {
        try {
            await logout();
            // navigate('/')
        } catch (error) {
            setError('ups, parece ocurrio un error')
        }
    } 

  return (
    <div>
        <div>{error && <p>{error}</p>}</div>
        <div><h1>Bienvenido {user.email}</h1></div>
        {/* {userHome ? <p> bienvenido {userHome.email}</p> : "" } */}
        Hola aqui tendras tu dashBoard
        <div>
            <button onClick={handleLogout}>salir</button>
        </div>
    </div>
  )
}

export default UserDashBoard
