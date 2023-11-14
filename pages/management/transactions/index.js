import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import { Container } from '@mui/material';


function ApplicationsTransactions() {
  return (
    <>
      <Head>
        <title>All Reports-FCD</title>
      </Head>
      
      <Container maxWidth="lg">
        <h3>All Reports</h3>
      </Container>
    </>
  );
}

ApplicationsTransactions.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default ApplicationsTransactions;
