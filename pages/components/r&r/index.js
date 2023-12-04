import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Container,
} from '@mui/material';

function Buttons() {
  return (
    <>
      <Head>
        <title>R&R</title>
      </Head>
      
      <Container maxWidth="lg">
        <h3>R&R</h3>
      </Container>
    </>
  );
}

Buttons.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Buttons;
