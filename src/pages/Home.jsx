import React from 'react'
import Category from '../components/Category'
import Header from '../components/Header'
import '../styles/Home.css'
import '../styles/res/Home_res.css'
const Home = () => {
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
