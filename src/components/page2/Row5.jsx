import {
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { columnColor, textColor } from '../../theme';
import { CurrencyRupee, ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';

const Row5 = ({ cost1, cost2, cost3, cost4, cost5 }) => {
  const [show, setShow] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:380px)');

  return (
    <Grid item container color={textColor}>
      {/* 5th row meta data component */}
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
          {/* 5th row meta data */}
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
            Total one-way cost of travel
          </Typography>
          {/* 5th row expand more or less icon */}
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
        {/* 5th row 1st column - Bus Type 1 */}
        <Grid item xs bgcolor={columnColor.column1} py={1}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
          >
            {/* cost icon */}
            <IconButton size="small" sx={{ cursor: 'default' }}>
              <CurrencyRupee fontSize="1rem" />
            </IconButton>
            {/* cost of the mode shown */}
            <Stack
              justifyContent={'center'}
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {cost1}
            </Stack>
          </Stack>
        </Grid>
        {/* 5th row 2nd column - Bus Type 2 */}
        <Grid item xs bgcolor={columnColor.column2} py={1}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
          >
            {/* cost icon */}
            <IconButton size="small" sx={{ cursor: 'default' }}>
              <CurrencyRupee fontSize="1rem" />
            </IconButton>
            {/* cost of the mode shown */}
            <Stack
              justifyContent={'center'}
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {cost2}
            </Stack>
          </Stack>
        </Grid>
        {/* 5th row 3rd column - Walk/Bicycle or Metro/Train */}
        <Grid item xs bgcolor={columnColor.column3} py={1}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
          >
            {/* cost icon */}
            <IconButton size="small" sx={{ cursor: 'default' }}>
              <CurrencyRupee fontSize="1rem" />
            </IconButton>
            {/* cost of the mode shown */}
            <Stack
              justifyContent={'center'}
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {cost3}
            </Stack>
          </Stack>
        </Grid>
        {/* 5th row 4th column - Own Car or Own Two-wheeler */}
        <Grid item xs bgcolor={columnColor.column4} py={1}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
          >
            {/* cost icon */}
            <IconButton size="small" sx={{ cursor: 'default' }}>
              <CurrencyRupee fontSize="1rem" />
            </IconButton>
            {/* cost of the mode shown */}
            <Stack
              justifyContent={'center'}
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {cost4}
            </Stack>
          </Stack>
        </Grid>
        {/* 5th row 5th column - Auto or Ride-hailing Car */}
        <Grid item xs bgcolor={columnColor.column5} py={1}>
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
          >
            {/* cost icon */}
            <IconButton size="small" sx={{ cursor: 'default' }}>
              <CurrencyRupee fontSize="1rem" />
            </IconButton>
            {/* cost of the mode shown */}
            <Stack
              justifyContent={'center'}
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {cost5}
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row5;
