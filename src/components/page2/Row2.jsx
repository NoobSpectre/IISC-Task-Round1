import {
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { columnColor, textColor } from '../../theme';
import { AiFillCar } from 'react-icons/ai';
import { BsFillTaxiFrontFill } from 'react-icons/bs';
import {
  ChevronRight,
  DirectionsBike,
  DirectionsBus,
  DirectionsWalk,
  KeyboardArrowDown,
  Subway,
  Train,
  TwoWheeler,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { useState } from 'react';

const Row2 = ({ mode1, mode2, mode3, mode4, mode5 }) => {
  const [show, setShow] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width:520px)');

  return (
    <Grid item container color={textColor}>
      {/* 2nd row meta data component */}
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
          {/* 2nd row meta data */}
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
            Total travel time spent while inside the vehicle(s)
          </Typography>
          {/* 2nd row expand more or less icon */}
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
        {/* 2nd row 1st column - Bus Type 1 */}
        <Grid
          item
          xs
          bgcolor={columnColor.column1}
          pt={1}
          pb={0.8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* if Bus Type 1 has transfers */}
          {mode1?.trans > 0 /* number of transfers */ && (
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {mode1?.trans} transfer{mode1?.trans > 1 && 's'}
            </Typography>
          )}
          {/* Bus type 1 icon */}
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Tooltip title="Bus Type 1" placement="left">
              <IconButton size="small" sx={{ cursor: 'default' }}>
                <DirectionsBus />
              </IconButton>
            </Tooltip>
            {/*  Icon in between two bus icons when Bus Type 1 has transfers  */}
            {mode1?.trans > 0 && (
              <IconButton size="small" sx={{ cursor: 'default' }}>
                {isSmallScreen ? <KeyboardArrowDown /> : <ChevronRight />}
              </IconButton>
            )}
            {/* Icon of 2nd bus icon when Bus Type 1 has transfers  */}
            {mode1?.trans > 0 && (
              <Tooltip title="Bus Type 1" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <DirectionsBus />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
          {/* time to be shown */}
          <Stack
            textAlign={'center'}
            sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
          >
            {mode1?.ivtt} min
          </Stack>
        </Grid>
        {/* 2nd row 2nd column - Bus Type 2 */}
        <Grid
          item
          xs
          bgcolor={columnColor.column2}
          pt={1}
          pb={0.8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* if Bus Type 2 has transfers */}
          {mode2?.trans > 0 /* number of transfers */ && (
            <Typography
              textAlign={'center'}
              sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
            >
              {mode2?.trans} transfer{mode2?.trans > 1 && 's'}
            </Typography>
          )}
          {/* Bus type 2 icon */}
          <Stack
            direction={isSmallScreen ? 'column' : 'row'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Tooltip title="Bus Type 2" placement="left">
              <IconButton size="small" sx={{ cursor: 'default' }}>
                <DirectionsBus />
              </IconButton>
            </Tooltip>
            {/* Icon in between two bus icons when Bus Type 2 has transfers  */}
            {mode2?.trans > 0 && (
              <IconButton size="small" sx={{ cursor: 'default' }}>
                {isSmallScreen ? <KeyboardArrowDown /> : <ChevronRight />}
              </IconButton>
            )}
            {/* Icon of 2nd bus icon when Bus Type 1 has transfers  */}
            {mode2?.trans > 0 && (
              <Tooltip title="Bus Type 2" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <DirectionsBus />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
          {/* time to be shown */}
          <Stack
            alignItems={'center'}
            sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
          >
            {mode2?.trans} min
          </Stack>
        </Grid>
        {/* 2nd row 3rd column - Walk/Bicycle or Metro/Train */}
        <Grid
          item
          xs
          bgcolor={columnColor.column3}
          pt={1}
          pb={0.8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {mode3?.mode === 'Walk / Bicycle' ? (
            /* Walk/Bicycle icon */
            <Stack
              direction={isSmallScreen ? 'column' : 'row'}
              justifyContent={'center'}
            >
              <Tooltip title="Walk" placement="left">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <DirectionsWalk />
                </IconButton>
              </Tooltip>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  color: 'rgba(0, 0, 0, 0.45)',
                  mx: '2px',
                }}
              >
                /
              </Typography>
              <Tooltip title="Bicycle" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <DirectionsBike />
                </IconButton>
              </Tooltip>
            </Stack>
          ) : (
            /* Metro/Train icon */
            <Stack
              direction={isSmallScreen ? 'column' : 'row'}
              justifyContent={'center'}
            >
              <Tooltip title="Metro" placement="left">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <Subway />
                </IconButton>
              </Tooltip>
              <Typography
                sx={{
                  fontSize: '1.5rem',
                  textAlign: 'center',
                  color: 'rgba(0, 0, 0, 0.45)',
                  mx: '2px',
                }}
              >
                /
              </Typography>
              <Tooltip title="Train" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <Train />
                </IconButton>
              </Tooltip>
            </Stack>
          )}
          {/* time to be shown */}
          <Stack
            textAlign={'center'}
            sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
          >
            {mode3?.ivtt} min
          </Stack>
        </Grid>
        {/* 2nd row 4th column - Own Car or Own Two-wheeler */}
        <Grid
          item
          xs
          bgcolor={columnColor.column4}
          pt={1}
          pb={0.8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Own Car or Own Two-wheeler icon */}
          <Stack direction={'row'} justifyContent={'center'}>
            {mode4?.mode === 'Own Car' ? (
              <Tooltip title="Own Car" placement="left">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <AiFillCar size={'1.65rem'} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Own Two-wheeler" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <TwoWheeler size={'1.65rem'} />
                </IconButton>
              </Tooltip>
            )}
          </Stack>
          {/* time to be shown */}
          <Stack
            textAlign={'center'}
            sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
          >
            {mode4?.ivtt} min
          </Stack>
        </Grid>
        {/* 2nd row 5th column - Auto or Ride Hailing Car */}
        <Grid
          item
          xs
          bgcolor={columnColor.column5}
          pt={1}
          pb={0.8}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Auto or Ride-hailing Car icon */}
          <Stack direction={'row'} justifyContent={'center'}>
            {mode5?.mode === 'Auto' ? (
              <Tooltip title="Auto" placement="left">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <BsFillTaxiFrontFill size={'1.65rem'} />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Ride-hailing Car" placement="right">
                <IconButton size="small" sx={{ cursor: 'default' }}>
                  <BsFillTaxiFrontFill size={'1.65rem'} />
                </IconButton>
              </Tooltip>
            )}
            {/* No 'Auto' icons found anywhere so rendered same icon in both cases */}
            {/* Can be updated later */}
          </Stack>
          {/* time to be shown */}
          <Stack
            textAlign={'center'}
            sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
          >
            {mode5?.ivtt} min
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row2;
