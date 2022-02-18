import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from '../containers/Layout'
import Home from '../pages/Home'
import Cojin from '../pages/Cojin';
import Polos from '../pages/Polos';
import Tazas from '../pages/Tazas';
import ProductId from '../components/ProductId';
import CreateAccount from '../pages/CreateAccount';
import AuthProvider from '../context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            {/* <Route exact path="/modal" element={<ModalProduct/>} /> */}
            <Route exact path="/polos" element={<Polos/>} />
            <Route exact path="/registre" element={<CreateAccount/>} />
            <Route exact path="/tazas" element={<Tazas/>} />
            <Route exact path="/cojin" element={<Cojin/>} />
            <Route exact path="/cojin/:productId" element={<ProductId/>} />
          </Routes>
        </Layout>
      </HashRouter>
    </AuthProvider>
  )
}

export default App
