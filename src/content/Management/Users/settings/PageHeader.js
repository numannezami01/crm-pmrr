import { Typography } from '@mui/material';

function PageHeader() {
  const user = {
    name: 'Numan Nezami',
    avatar: '/static/images/avatars/1.jpg'
  };

  return (
    <>
      <Typography variant="h3" component="h3" gutterBottom>
        Account Settings
      </Typography>
      <Typography variant="subtitle2">
        {user.name}, this is your Account settings panel.
      </Typography>
    </>
  );
}

export default PageHeader;
