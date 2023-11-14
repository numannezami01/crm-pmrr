import Head from 'next/head';
import SidebarLayout from 'src/layouts/SidebarLayout';
import {
  Container,
} from '@mui/material';
import { useState } from 'react';




function TabsDemo() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Exit Requistion - FCD</title>
      </Head>
      
      <Container maxWidth="lg">
        <h3>Exit Requistion</h3>
      </Container>
    </>
  );
}

TabsDemo.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default TabsDemo;
