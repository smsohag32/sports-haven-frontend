import axios from "axios"

const addCart = async(productInfo)=>{

    // new carts product information store 
   const newCartProduct = {
    customer_name: productInfo?.customer_name,
    email: productInfo?.email,
    name: productInfo?.name,
    image: productInfo?.image,
    price: productInfo?.price,
    rating: productInfo?.rating
   }
    const res = await axios.post(`http://localhost:5000/carts`, newCartProduct);
    const data = res.data;
    return data;
}

export default addCart;