import { Divider, Stack, Typography, colors } from '@mui/material';
import { Question1 } from '../components/home/Q1';
import { Question2 } from '../components/home/Q2';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Home = () => {
  const [collapse, setCollapse] = useState(true);

  localStorage.clear();

  return (
    <>
      <Helmet>
        <title>Respondent Travel Profile</title>
      </Helmet>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        p={5}
        gap={2}
        bgcolor={colors.amber[100]}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.8rem',
            textAlign: 'center',
          }}
        >
          Respondent Travel Profile
          <Divider />
        </Typography>
        {collapse ? (
          <Question1 collapse={collapse} setCollapse={setCollapse} />
        ) : (
          <Question2 collapse={collapse} setCollapse={setCollapse} />
        )}
      </Stack>
    </>
  );
};

export default Home;
