'use client'
import {
  Box,
  Button,
} from '@mui/material';
import style from '../Hero/style.module.css'
import Link from 'src/components/Link';
import Image from 'next/image';
import { useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import userContext from 'src/contexts/UserContext';


function singin() {


  const router = useRouter();
  const [userName,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [error, setError] = useState('');

  const {setUser} = useContext(userContext)


  
  const handleLogin = async (e) => {
     e.preventDefault();

    
    if (!userName || !password || !email) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:9997/regFCD/loginUser', {userName,  password ,email }); //enter backend api url to get loggin access
      const data = response.data.user;
      // isLoggedIn(true);
      setUser({data});
      router.push('/dashboards/home')  
      console.log(data);
    } catch (error) {
      console.error('Login failed', error);
      setError('Invalid username or password.');
    }
  };
  
  return (
       <div className={style.main}>
       <div className={style.left}>
         <Image className={style.img} src="/office-removebg-preview-transformed.png" height={900} width={600} alt='poto' priority={true} ></Image>
       </div>
       <div className={style.right}>
        <div className={style.formdiv}>
          <div className={style.text}>
            <h3 className={style.head}>Welcome  to FCD</h3>
          </div>
          <form onSubmit={handleLogin} >
            <h2 className={style.h2}>sign in</h2>
            <input autoComplete='current-username' className={style.input1}  onChange={(e)=>setUsername(e.target.value) }  type="text" name='userName' placeholder='username' />
            <input autoComplete='current-password' className={style.input3}  onChange={(e)=>setEmail(e.target.value) } type="email" name='email' placeholder='Email' />
            <input autoComplete='current-password' className={style.input2}  onChange={(e)=>setPassword(e.target.value) } type="password" name='password' placeholder='password' />
             {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className={style.button}>Log In</button>
          </form>
            <Link className= {style.forgot} href="/forget/forgetPass">Forgot password?</Link>
            <Link className= {style.singup} href="/singup/signUp">SignUp</Link>
           
        </div>
       </div>

    </div>
    
  );
}

export default singin;
