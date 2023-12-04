"use client"
import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import style from "./style.module.css"
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';  



const defaultTheme = createTheme();

export default function resetpassword() {
  
  const calll = () => toast("link send to Email"); 


  const router = useRouter();
  const { token } = router.query;
  const [email, setEmail] = useState("");
  
  


  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      console.log( "heloo")
      const response = await axios.get('http://localhost:9997/forgotpassword');
      const respData = response.data;
      console.log(respData);
    if (response.ok){
      console.log('Password reset successful');
      alert("Password reset email sent! Check your inbox.")
      router.push('/', respData)  
      }
     else{
      console.error('Failed to reset password');
   }
  }
    catch (error) {
      // alert('reset failed')
      console.error('reset failed', error);
      // setError('All fields are mendate.'); 
      
    }
     
    };
  

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget Your Password?
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
              
            <Button
              onClick={calll}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
             send link 
            </Button>
           
            <Grid container>
              <Grid sx={{ml:13}} item xs>
                <Link href="/" variant="body2">
                  Go Home
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}