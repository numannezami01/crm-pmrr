"use client"
import * as React from 'react';
import style from '../style.module.css';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
       Fast Credit Deal
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const router = useRouter();
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    address: "",
    city: "",
    state: "",
  });
  const [error, setError] = useState("");



  const handleChange = (e) => {
    e.preventDefault();
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };


  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!details) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/signup/', details); 
      const respData = response.data;
      router.push('/success', respData)  
      console.log(respData);

    } catch (error) {
      console.error('Signup failed', error);
      setError('All fields are mendate.');
    }
  }


  const resetForm = (e)=>{
    setconfirmPass(true)
    setDetails({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    address: "",
    city: "",
    state: "",
    })
  };



  return (
   <div className={style.main}>
       
        <div className={style.formdiv}>
          <form onSubmit={handleSubmit} >
            <h2 className={style.h2}>Welcome  to FCD,<br/> <span className={style.op} >Registration</span></h2>
            <div className={style.grid}>
            <input required autoComplete='first-name' className={style.inputs}  onChange={handleChange }  type="text" name='firstname' placeholder='Firstname' />
            <input required autoComplete='last-name' className={style.inputs}  onChange={handleChange }  type="text" name='lastname' placeholder='Lastname' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='current-username' className={style.inputs}  onChange={handleChange }  type="text" name='username' placeholder='username' />
            <input required autoComplete='current-email' className={style.inputs}  onChange={handleChange }  type="text" name='email' placeholder='Email' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='current-password' className={style.inputs}  onChange={handleChange} type="password" name='password' placeholder='password' />
            <input required autoComplete='mobile-number' className={style.inputs}  onChange={handleChange} type="tel" name='mobilenumber' placeholder='Mobile Number' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='city-name' className={style.inputs}  onChange={handleChange} type="text" name='city' placeholder='City' />
            <input required autoComplete='state-name' className={style.inputs}  onChange={handleChange} type="text" name='state' placeholder='State' />
            </div>
            <input required autoComplete='address-name' className={style.address}  onChange={handleChange} type="text" name='address' placeholder='Address' />

             {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={style.grid}>
            <button className={style.button}>Sign Up</button>
            </div>
            <div className={style.redi}>
            Already have an account, 
            <Link className= {style.singin} href="/"> &nbsp; Sign In</Link>
            </div>
          </form>
        </div>
    </div>
  );
}
