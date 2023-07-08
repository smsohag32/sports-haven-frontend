import axios from "axios"

const addCart = async(product)=>{

   const productInfo = {
    name: product.name,
    image: product.image,
    price: product.price,
    rating: product.rating
   }
    const res = await axios.post(`http://localhost:5000/carts`, productInfo);
    const data = res.data;
    return data;
}

export default addCart;