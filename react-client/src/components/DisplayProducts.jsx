import { useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";

const DisplayProducts = (props) => {

  const {allProducts, setAllProducts} = props

  useEffect(() => {
    axios.get('http://172.19.219.207:800/api/products')
      .then((res) => {
        setAllProducts(res.data)
      })
      .catch((err) => console.log(err))
  }, [setAllProducts])

  return (
    <div className="display-products">
      {
        allProducts.map((product) => {
          <div className="each-product" key={product._id}>
            <h2>{product.title}</h2>
            <p><b>Title: </b>{product.title}</p>
            <p><b>Price: </b>{product.price}</p>
            <p><b>Description: </b>{product.description}</p>
          </div>
        })
      }
    </div>
  );
}

export default DisplayProducts;
