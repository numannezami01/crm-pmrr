import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';

import {
  Container,
} from '@mui/material';

function Accordions() {
  return (
    <>
      <Head>
        <title>salesDashboard</title>
      </Head>
      
      <Container maxWidth="lg">
        <h3>salesDashboard  </h3>
      </Container>
    </>
  );
}

Accordions.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Accordions;
