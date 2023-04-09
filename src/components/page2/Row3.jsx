import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { ExpandLess, ExpandMore, HourglassBottom } from '@mui/icons-material';
import { columnColor, textColor } from '../../theme';
import { useState } from 'react';

const Row3 = ({ waittime1, waittime2, waittime3, waittime4, waittime5 }) => {
  const [show, setShow] = useState(false);

  return (
    <Grid item container color={textColor}>
      {/* 3rd row meta data component */}
      <Grid
        item
        xs={12}
        textAlign={'center'}
        py={0.5}
        bgcolor={'#240090'}
        sx={{ borderBottom: '2px solid black' }}
        onClick={() => setShow(prev => !prev)}
      >
        <Stack direction={'row'}>
          {/* 3rd row meta data */}
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
            Total travel time spent outside vehicle(s)
          </Typography>
          {/* 3rd row expand more or less icon */}
          <Tooltip title={show ? 'Shrink' : 'Expand'} arrow placement='left'>
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
        {/* 3rd row 1st column - Bus Type 1 */}
        <Grid item xs bgcolor={columnColor.column1} py={1}>
          <Stack>
            {/* Waittime icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              <Tooltip title="Waiting time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <HourglassBottom />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* waittime of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {waittime1} min
            </Typography>
          </Stack>
        </Grid>
        {/* 3rd row 2nd column - Bus Type 2 */}
        <Grid item xs bgcolor={columnColor.column2} py={1}>
          <Stack>
            {/* Waittime icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              <Tooltip title="Waiting time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <HourglassBottom />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* waittime of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {waittime2} min
            </Typography>
          </Stack>
        </Grid>
        {/* 3rd row 3rd column - Walk/Bicycle or Metro/Train */}
        <Grid item xs bgcolor={columnColor.column3} py={1}>
          <Stack>
            {/* Waittime icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              <Tooltip title="Waiting time" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <HourglassBottom />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* waittime of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {waittime3} min
            </Typography>
          </Stack>
        </Grid>
        {/* 3rd row 4th column - Own Car or Own Two-wheeler */}
        <Grid item xs bgcolor={columnColor.column4} py={1}>
          <Stack>
            {/* Waittime icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              <Tooltip title="Waiting time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <HourglassBottom />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* waittime of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {waittime4} min
            </Typography>
          </Stack>
        </Grid>
        {/* 3rd row 5th column - Auto or Ride-hailing Car */}
        <Grid item xs bgcolor={columnColor.column5} py={1}>
          <Stack>
            {/* Waittime icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              <Tooltip title="Waiting time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <HourglassBottom />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* waittime of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {waittime5} min
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row3;
