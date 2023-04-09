import { Divider, Grid, Paper, Stack, Typography, colors } from '@mui/material';
import { JSON_FILE, getMode4, getMode5, getModes1_2_3 } from '../utils/utils';
import { useAnswer } from '../context/AnswerContext';
import { Navigate } from 'react-router-dom';
import { verify } from '../store/store';
import { Helmet } from 'react-helmet';
import Row1 from '../components/page2/Row1';
import Row2 from '../components/page2/Row2';
import Row3 from '../components/page2/Row3';
import { useEffect, useState } from 'react';
import Row4 from '../components/page2/Row4';
import Row5 from '../components/page2/Row5';
import Row6 from '../components/page2/Row6';
import Row7 from '../components/page2/Row7';

const Page2 = () => {
  const [modeData, setModeData] = useState([]);
  let mode1, mode2, mode3, mode4, mode5;
  const { answer2 } = useAnswer();
  const _file = JSON_FILE[answer2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`./data/${_file}`);
        const data = await res.json();

        setModeData(data.Data);
      } catch (error) {
        // console.log({
        //   success: false,
        //   message: error.message,
        // });
      }
    };

    fetchData();
  }, [_file]);

  if (modeData && modeData[0]) {
    [mode1, mode2, mode3] = getModes1_2_3(modeData[0]);
    mode4 = getMode4(modeData[0]);
    mode5 = getMode5(modeData[0]);
  }

  if (!verify()) return <Navigate to={'/'} />;

  return (
    <>
      {/* sets the title of the page */}
      <Helmet>
        <title>Mode Choice</title>
      </Helmet>
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        py={5}
        gap={2}
        bgcolor={colors.amber[100]}
        sx={{ px: { xs: 1.2, sm: 2.4, md: 4, lg: 7 } }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: '1.8rem',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Mode Choice
          <Divider />
        </Typography>
        <Paper
          container
          component={Grid}
          elevation={6}
          sx={{ borderRadius: 1, overflow: 'hidden' }}
        >
          {/* Row1 of the mode choice table */}
          <Row1
            mode1={mode1?.mode}
            mode2={mode2?.mode}
            mode3={mode3?.mode}
            mode4={mode4?.mode}
            mode5={mode5?.mode}
          />
          {/* Row2 of the mode choice table */}
          <Row2
            mode1={mode1}
            mode2={mode2}
            mode3={mode3}
            mode4={mode4}
            mode5={mode5}
          />
          {/* Row3 of the mode choice table */}
          <Row3
            waittime1={mode1?.waittime + mode1?.walktime}
            waittime2={mode2?.waittime + mode2?.walktime}
            waittime3={mode3?.waittime + mode3?.walktime}
            waittime4={mode4?.waittime + mode4?.walktime}
            waittime5={mode5?.waittime + mode5?.walktime}
          />
          {/* Row4 of the mode choice table */}
          <Row4
            delay1={mode1?.tvariab}
            delay2={mode2?.tvariab}
            delay3={mode3?.tvariab}
            delay4={mode4?.tvariab}
            delay5={mode5?.tvariab}
          />
          {/* Row5 of the mode choice table */}
          <Row5
            cost1={mode1?.tcost}
            cost2={mode2?.tcost}
            cost3={mode3?.tcost}
            cost4={mode4?.tcost}
            cost5={mode5?.tcost}
          />
          {/* Row6 of the mode choice table */}
          <Row6
            crowd1={mode1?.crowd}
            crowd2={mode2?.crowd}
            crowd3={mode3?.crowd}
          />
          {/* Row7 of the mode choice table */}
          <Row7 serv1={mode1?.serv} serv2={mode2?.serv} />
        </Paper>
      </Stack>
    </>
  );
};
export default Page2;
