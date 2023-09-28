import axios from "axios";

// save user to mongodb database
const saveUser = async (user) => {
  const email = user.email;
  const userInfo = {
    name: user.displayName,
    email: user.email,
    image: user.photoURL,
  };
  const res = await axios.put(
    `https://sports-haven-backend.vercel.app/users/${email}`,
    userInfo
  );
  const data = res.data;
  return data;
};

export default saveUser;
