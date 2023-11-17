import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';

import { Grid, Container } from '@mui/material';

import ProfileCover from 'src/content/Management/Users/details/ProfileCover';

function ManagementUserProfile() {
  const user = {
    savedCards: 7,
    name: 'Numan Nezami',
    coverImg: '/static/images/placeholders/covers/1.jpg',
    avatar: '/static/images/avatars/4.jpg',
    description:
      " ",
    jobtitle: 'Web Developer',
    location: 'Delhi,',
    followers: '465'
  };

  return (
    <>
      <Head>
        <title>User Details - FCD</title>
      </Head>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        
          <Grid item xs={12} md={8}>
            <ProfileCover user={user} />
          </Grid>
         
      </Container>
    </>
  );
}

ManagementUserProfile.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ManagementUserProfile;
