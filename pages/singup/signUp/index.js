"use client"
import * as React from 'react';
import style from '../style.module.css';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import {notify} from "react-toastify"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 







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
  const notify = () => toast("fetching your Data"); 



  const router = useRouter();
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
  });
  const [error, setError] = useState("");
  const [userRole, setUserRole] = useState('');


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
      const response = await axios.post('http://localhost:9997/regFCD/saveFCDReg', details);
      const respData = response.data;
      router.push('/success', respData)  
      console.log(respData);

    } catch (error) {
      console.error('Signup failed', error.response.data);
      // setError('All fields are mendate.');
    }
  }

 

  const resetForm = (e)=>{
    setconfirmPass(true)
    setDetails({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    mobileNumber: "",
    address: "",
    city: "",
    state: "",
    role:"",
    })
  };
  

  return (
   <div className={style.main}>
       
        <div className={style.formdiv}>
          <form onSubmit={handleSubmit} >
            <h2 className={style.h2}>Welcome  to FCD,<br/> <span className={style.op} >Registration</span></h2>
            <div className={style.grid}>
            <input required autoComplete='first-name' className={style.inputs}  onChange={handleChange }  type="text" name='firstName' placeholder='Firstname' />
            <input required autoComplete='last-name' className={style.inputs}  onChange={handleChange }  type="text" name='lastName' placeholder='Lastname' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='current-username' className={style.inputs}  onChange={handleChange }  type="text" name='userName' placeholder='username' />
            <input required autoComplete='current-email' className={style.inputs}  onChange={handleChange }  type="text" name='email' placeholder='Email' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='current-password' className={style.inputs}  onChange={handleChange} type="password" name='password' placeholder='password' />
            <input required autoComplete='mobile-number' className={style.inputs}  onChange={handleChange} type="tel" name='mobileNumber' placeholder='Mobile Number' />
            </div>
            <div className={style.grid}>
            <input required autoComplete='city-name' className={style.inputs}  onChange={handleChange} type="text" name='city' placeholder='City' />
            <input required autoComplete='state-name' className={style.inputs}  onChange={handleChange} type="text" name='state' placeholder='State' />
            </div>
            <input required autoComplete='address-name' className={style.address}  onChange={handleChange} type="text" name='address' placeholder='Address' />
           
                <label className={style.label}>
                      Select your role:
                 <select className={style.input2}>
                <option selected>select one</option>
                <option role='admmin' value="1">Admin</option>
                <option role='mangers' value="2">Manager </option>
                <option role='employe' value="3">Employee </option>
              </select>
      </label>
             {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className={style.grid}>
            <button onClick={notify} className={style.button}>Sign Up</button>
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
