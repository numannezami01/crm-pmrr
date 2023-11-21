"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import style from '../style.module.css';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import axios from 'axios';

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
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  //  const [password,setPassword] = useState("");
  const [data, setData] = useState({
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
  const [confirmPass, setconfirmPass] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const signUp = async () =>{

     try {
      const response = await axios.post('http://localhost:8080/api/signup/', {firstname,
    lastname,
    username,
    email,
    password,
    mobilenumber,
    address,
    city,
    state}); 
      const respData = response.data.user;
      // const token = response.data.token;
      // router.push('/dashboards/home', respData)  
      console.log(respData);

    } catch (error) {
      console.error('Signup failed', error);
      setError('All fields are mendate.');
    }
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    data.password !== data.confirmpass ? signUp(data) : setconfirmPass(false)
    
  }


  const resetForm = (e)=>{
    setconfirmPass(true)
    setData({
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
    <div className={style.mbox}>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'skyblue' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              FCD Registration
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={10} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="firstname"
                    label="Firstname"
                    name="firstname"
                    autoComplete="first-name"
                    value= {data.firstname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Lastname"
                    name="lastname"
                    autoComplete="last-name"
                    value= {data.lastname}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoComplete="user-name"
                    value= {data.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value= {data.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="password"
                    label="password"
                    name="password"
                    type='password'
                    autoComplete="password"
                    value= {data.password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="mobilenumber"
                    label="Mobile Number"
                    name="mobilenumber"
                    autoComplete="mobilenumber"
                    value= {data.mobilenumber}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="address"
                    label="Permanent Address"
                    id="address"
                    autoComplete="address"
                    value= {data.address}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    autoComplete="city-name"
                    value= {data.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={5}>
                  <TextField
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    autoComplete="state-name"
                    value= {data.state}
                    onChange={handleChange}
                  />
                </Grid>

                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, and updates via email."
                />
              </Grid> */}
              </Grid>
              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                submit
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </div>
  );
}
