import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { columnColor, textColor } from '../../theme';
import {
  AirlineSeatReclineNormal,
  AirlineSeatReclineExtra,
  ExpandLess,
  ExpandMore,
  Air,
} from '@mui/icons-material';
import { useState } from 'react';

const serviceInfo = {
  0: {
    // icon and msg to be rendered if service type is 0
    icon: '--',
    msg: '',
  },
  1: {
    // icon and msg to be rendered if service type is Ordinary
    icon: (
      <Stack direction={'row'} justifyContent={'center'}>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <AirlineSeatReclineNormal />
        </IconButton>
      </Stack>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Ordinary
      </Typography>
    ),
  },
  2: {
    // icon and msg to be rendered if service type is Express Non-AC
    icon: (
      <Stack direction={'row'} justifyContent={'center'}>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <AirlineSeatReclineExtra />
        </IconButton>
      </Stack>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Express Non-AC
      </Typography>
    ),
  },
  3: {
    // icon and msg to be rendered if service type is Express AC
    icon: (
      <Stack direction={'row'} justifyContent={'center'}>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <AirlineSeatReclineExtra />
        </IconButton>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <Air fontSize="1rem" sx={{ transform: 'rotate(180deg)' }} />
        </IconButton>
      </Stack>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Express AC
      </Typography>
    ),
  },
};

const Row7 = ({ serv1, serv2 }) => {
  const [show, setShow] = useState(false);

  return (
    <Grid item container color={textColor}>
      {/* 7th row meta data component */}
      <Grid
        item
        xs={12}
        textAlign={'center'}
        py={0.5}
        bgcolor={'#240090'}
        onClick={() => setShow(prev => !prev)}
      >
        <Stack direction={'row'}>
          {/* 7th row meta data */}
          <Typography
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'default',
            }}
          >
            Service type
          </Typography>
          {/* 7th row expand more or less icon */}
          <Tooltip title={show ? 'Shrink' : 'Expand'} arrow placement="left">
            <IconButton size="small">
              {show ? (
                <ExpandLess htmlColor={textColor} />
              ) : (
                <ExpandMore htmlColor={textColor} />
              )}
            </IconButton>
          </Tooltip>
        </Stack>
      </Grid>
      {/* This component is not displayed until show is set to true */}
      <Grid item container sx={{ display: show ? 'flex' : 'none' }}>
        {/* 7th row 1st column */}
        <Grid item container xs bgcolor={columnColor.column1} py={2}>
          <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
            {serviceInfo[serv1]?.icon}
            {serviceInfo[serv1]?.msg}
          </Stack>
        </Grid>
        {/* 7th row 2nd column */}
        <Grid item container xs bgcolor={columnColor.column2} py={2}>
          <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
            {serviceInfo[serv2]?.icon}
            {serviceInfo[serv2]?.msg}
          </Stack>
        </Grid>
        {/* 7th row 3rd column */}
        <Grid item container xs bgcolor={columnColor.column3} py={2}>
          <Stack
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            fontSize={'1.5rem'}
          >
            {/* Since no data is provided it is empty shown with two dashes */}
            --
          </Stack>
        </Grid>
        {/* 7th row 4th column */}
        <Grid
          item
          container
          xs
          bgcolor={columnColor.column4}
          py={2}
          fontSize={'1.5rem'}
        >
          <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
            {/* Since no data is provided it is empty shown with two dashes */}
            --
          </Stack>
        </Grid>
        {/* 7th row 5th column */}
        <Grid
          item
          container
          xs
          bgcolor={columnColor.column5}
          py={2}
          fontSize={'1.5rem'}
        >
          <Stack width={'100%'} alignItems={'center'} justifyContent={'center'}>
            {/* Since no data is provided it is empty shown with two dashes */}
            --
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row7;
