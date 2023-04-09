import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { MdMoreTime } from 'react-icons/md';
import { columnColor, textColor } from '../../theme';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const Row4 = ({ delay1, delay2, delay3, delay4, delay5 }) => {
  const [show, setShow] = useState(false);

  return (
    <Grid item container color={textColor}>
      {/* 4th row meta data */}
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
          {/* 4th row meta data */}
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
            Possible delay due to traffic congestion or other uncertainties
          </Typography>
          {/* 4th row expand more or less icon */}
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
        {/* 4th row 1st column - Bus Type 1 */}
        <Grid item xs bgcolor={columnColor.column1} py={1}>
          <Stack>
            {/* delay icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              {/* renders on hover on the 1st column icon */}
              <Tooltip title="Delay time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <MdMoreTime />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* delay of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              -- max {delay1} min delay
            </Typography>
          </Stack>
        </Grid>
        {/* 4th row 2nd column - Bus Type 2 */}
        <Grid item xs bgcolor={columnColor.column2} py={1}>
          <Stack>
            {/* delay icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              {/* renders on hover on the 2nd column icon */}
              <Tooltip title="Delay time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <MdMoreTime />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* delay of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              -- max {delay2} min delay
            </Typography>
          </Stack>
        </Grid>
        {/* 4th row 3rd column - Walk/Bicycle or Metro/Train */}
        <Grid item xs bgcolor={columnColor.column3} py={1}>
          <Stack>
            {/* delay icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              {/* renders on hover on the 3rd column icon */}
              <Tooltip title="Delay time" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <MdMoreTime />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* delay of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              -- max {delay3} min delay
            </Typography>
          </Stack>
        </Grid>
        {/* 4th row 4th column - Own Car or Own Two-wheeler */}
        <Grid item xs bgcolor={columnColor.column4} py={1}>
          <Stack>
            {/* delay icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              {/* renders on hover on the 4th column icon */}
              <Tooltip title="Delay time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <MdMoreTime />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* delay of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              -- max {delay4} min delay
            </Typography>
          </Stack>
        </Grid>
        {/* 4th row 5th column - Auto or Ride-hailing Car */}
        <Grid item xs bgcolor={columnColor.column5} py={1}>
          <Stack>
            {/* delay icon */}
            <Stack direction={'row'} justifyContent={'center'}>
              {/* renders on hover on the 5th column icon */}
              <Tooltip title="Delay time" placement="top">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <MdMoreTime />
                </IconButton>
              </Tooltip>
            </Stack>
            {/* delay of the mode shown */}
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              -- max {delay5} min delay
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row4;
