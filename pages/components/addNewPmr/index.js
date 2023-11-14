import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Container,
} from '@mui/material';
import Box from '@mui/material/Box';


const shapeStyles = { bgcolor: 'primary.main', width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: '50%' };
const rectangle = <Box component="span" sx={shapeStyles} />;
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }} />
);

function Badges() {



  return (
    <>
      <Head>
        <title>FCD-PMR</title>
      </Head>
      <Container maxWidth="lg">
        <h3>Add New PMR</h3>
      </Container>
    </>
  );
}

Badges.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Badges;
