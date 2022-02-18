import { getFirestore, collection, getDocs } from 'firebase/firestore'
import React, {useState, useEffect} from 'react'
import ProductCard from '../components/ProductCard'
import "../styles/productContainer.css";
import '../styles/res/productContainer_res.css'
import PageLoading from './PageLoading'
const db = getFirestore();
const Polos = () => {

  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    const getProduct = async() => {
      const item = await getDocs(collection(db, "disneyPolos"));
      const docs = [];
      item.forEach((doc) => {
        docs.push({...doc.data(), id: doc.id});
      });
      setProduct(docs);
      setLoading(false);
    };
    getProduct();
  }, [])

  return (
      
        <div className="container__prod" >
          <h1 className="product__title">Polos</h1>
          <div>
            {loading && <PageLoading/>}
            <ul className="container__products" >
              {product.map((prod) => (
                <ProductCard  key={prod.id} prod={prod} />
              ))}
            </ul>
          </div>
        </div>
  )
}

export default Polos
