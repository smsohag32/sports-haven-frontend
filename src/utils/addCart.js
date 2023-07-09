import axios from "axios"

// use to save carts data in database
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
    const res = await axios.post(`https://sports-haven-backend.vercel.app/carts`, newCartProduct);
    const data = res.data;
    return data;
}

export default addCart;