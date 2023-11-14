// 'use client'
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled
} from '@mui/material';
import style from '../Hero/style.module.css'
import Link from 'src/components/Link';
import Image from 'next/image';
import { useState } from 'react';

const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
  ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const JsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

  img {
    width: 60%;
    height: 60%;
    display: block;
  }
`
);

const NextJsAvatar = styled(Box)(
  ({ theme }) => `
  width: ${theme.spacing(8)};
  height: ${theme.spacing(8)};
  border-radius: ${theme.general.borderRadius};
  background-color: #dfebf6;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState('');
  // const [users,setUsers] = useState([]);

  const handleLogin = async (e) => {
     e.preventDefault();

    if (!username || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('/api/login', {username, password }); //enter backend api url to get loggin access
      const token = response.data.token;

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
            <input autoComplete='current-username' className={style.input1}  onChange={(e)=>setUsername(e.target.value) }  type="text" name='username' placeholder='username' />
            <input autoComplete='current-password' className={style.input2}  onChange={(e)=>setPassword(e.target.value) } type="password" name='password' placeholder='password' />
             {error && <p style={{ color: 'red' }}>{error}</p>}
            <button className={style.button}>Log In</button>
          </form>
            <Link className= {style.forgot} href="/forget/forgetPass">Forgot password?</Link>
            <Box className= {style.dash}> 
            <Button
                  component={Link}
                  href="/dashboards/home"
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Preview Dashboard
                </Button>
              </Box>
        </div>
       </div>

    </div>
    
  );
}

export default Hero;
