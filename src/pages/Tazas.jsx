import React, { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import db from '../firebase/firebase.config';
import ProductCard from '../components/ProductCard';
import "../styles/productContainer.css"
import '../styles/res/productContainer_res.css'
const Tazas = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async() => {
      const item = await getDocs(collection(db,"cojines"));
      const docs = [];
      item.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProduct(docs);
    };
    getProduct();
  },[]);

  return (
    <>
      <div className="container__prod">
        <h1 className="product__title">Tazas</h1>
        <div >
          <ul className="container__products">
            {product.map(prod => (
              <ProductCard  key={prod.id} prod={prod} />
              // <div className="image__container">
              //   <img src={prod.image}  alt={prod.name} />
              // </div>
            ))}
          </ul>
        </div>
      </div>
    </>
    )
}

export default Tazas
