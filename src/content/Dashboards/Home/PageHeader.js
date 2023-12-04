import { Typography, Avatar, Grid, useTheme } from '@mui/material';
import { green } from '@mui/material/colors';
import { useContext } from 'react';
import userContext from 'src/contexts/UserContext';

function PageHeader() {
  // const {user} = useContext(userContext);
  //  console.log(user.data);
 const user = {
   name: 'mayank gupta',
  avatar: '/static/images/avatars/4.jpg'
  };
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <Avatar
          sx={{
            mr: 2,
            width: theme.spacing(8),
            height: theme.spacing(8)
          }}
          variant="rounded"
          alt={user.name} 
          src={user.avatar}
        />
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome to FCD, <span style={{textTransform: 'capitalize', opacity:'.9'}}> {user.name}  </span>!
        </Typography>
        <Typography variant="subtitle2">
          Designation: Full Stack Developer
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
