import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  styled
} from '@mui/material';
import Head from 'next/head';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';

import BaseLayout from 'src/layouts/BaseLayout';
import Image from 'next/image';

const MainContent = styled(Box)(
  () => `
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: column;
`
);

const TopWrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  width: 100%;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: ${theme.spacing(6)};
`
);




function Status404() {
  return (
    <>
      <Head>
        <title>Status - 404</title>
      </Head>
      <MainContent>
        <TopWrapper>
              <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>

          <Container maxWidth="md">
            <Box textAlign="center">
              <Image priority alt="Success" height={150} width={150} src="/success.svg" />
              <Typography variant="h2" sx={{ my: "2" }}>
                Registration Successful!
              </Typography>
             
            </Box>
            <Container maxWidth="sm">
                <Button href="/" variant="outlined">
                  Click Here To LogIn!
                </Button>
            </Container>
          </Container>
              </Card>
        </TopWrapper>
      </MainContent>
    </>
  );
}

export default Status404;

Status404.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
