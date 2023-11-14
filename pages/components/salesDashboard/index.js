import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Container,
} from '@mui/material';

function Buttons() {
  return (
    <>
      <Head>
        <title>Sales-Dashboard</title>
      </Head>
      
      <Container maxWidth="lg">
        <h3>Sales Dashboard</h3>
      </Container>
    </>
  );
}

Buttons.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Buttons;
