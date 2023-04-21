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
      
    </div>
  );
}

export default DisplayProducts;
