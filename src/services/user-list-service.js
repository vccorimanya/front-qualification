import axios from 'axios';

 export const getUsers = async () => {
   try {
     const users = await
       axios.get('https://reqres.in/api/users')
       return users
   } catch (err) {
     console.log(err.message);
   }
 };