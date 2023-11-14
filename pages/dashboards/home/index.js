import Head from 'next/head';

import SidebarLayout from 'src/layouts/SidebarLayout';

import PageHeader from 'src/content/Dashboards/Home/PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Container, Grid } from '@mui/material';


function DashboardCrypto() {
  return (
    <>
      <Head>
        <title>FCD Dashboard</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        
      </Container>
    </>
  );
}

DashboardCrypto.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default DashboardCrypto;
