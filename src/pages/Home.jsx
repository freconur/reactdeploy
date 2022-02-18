import React from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import { useAuth } from '../context/AuthContext';
import '../styles/Home.css';
import '../styles/res/Home_res.css';
const Home = () => {

  const {user} = useAuth();
  console.log(user);

  return (
    <div className="Home">
      <div className="Home__container">
        <Header />
        <Category />

      </div>
        
    </div>
  )
}

export default Home
