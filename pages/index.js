import {
  Box,
  Card,
  styled
} from '@mui/material';
import BaseLayout from 'src/layouts/BaseLayout';

import Head from 'next/head';

import Hero from 'src/content/Overview/Hero';



const OverviewWrapper = styled(Box)(
  ({ theme }) => `
    overflow: auto;
    background: ${theme.palette.common.white};
    flex: 1;
    overflow-x: hidden;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Head>
        <title>Welcome to FCD</title>
      </Head>
    
      <Hero />
      
    </OverviewWrapper>
  );
}

export default Overview;

Overview.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
