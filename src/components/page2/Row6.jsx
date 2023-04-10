import {
  Groups,
  Group,
  EmojiPeople,
  ExpandLess,
  ExpandMore,
} from '@mui/icons-material';
import { Grid, IconButton, Stack, Tooltip, Typography } from '@mui/material';
import { GiHumanPyramid } from 'react-icons/gi';
import { columnColor, textColor } from '../../theme';
import { useState } from 'react';

const seatInfo = {
  0: {
    // icon and msg to be rendered if crowd is 0
    icon: '--',
    msg: '',
  },
  1: {
    // icon and msg to be rendered if many seats are available
    icon: (
      <Stack direction={'row'} justifyContent={'center'}>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <Groups />
        </IconButton>
      </Stack>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Many seats available
      </Typography>
    ),
  },
  2: {
    // icon and msg to be rendered if some seats are available
    icon: (
      <Stack direction={'row'} justifyContent={'center'}>
        <IconButton size="small" sx={{ cursor: 'default' }}>
          <Group />
        </IconButton>
      </Stack>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Some seats available
      </Typography>
    ),
  },
  3: {
    // icon and msg to be rendered if only standing space available
    icon: (
      <Grid item container justifyContent={'center'} alignItems={'center'}>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <GiHumanPyramid fontSize={'1.65rem'} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <EmojiPeople fontSize={'1.2rem'} />
          </IconButton>
        </Grid>
      </Grid>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        All seats occupied; standing space available
      </Typography>
    ),
  },
  4: {
    // icon and msg to be rendered if fully crowded
    icon: (
      <Grid item container justifyContent={'center'} alignItems={'center'}>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <GiHumanPyramid fontSize="1.5rem" />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <EmojiPeople fontSize={'1rem'} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <EmojiPeople fontSize={'1rem'} />
          </IconButton>
        </Grid>
        <Grid
          item
          xs={6}
          sm={'auto'}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <IconButton size="small" sx={{ cursor: 'default' }}>
            <EmojiPeople fontSize={'1rem'} />
          </IconButton>
        </Grid>
      </Grid>
    ),
    msg: (
      <Typography
        textAlign={'center'}
        sx={{ fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        Fully crowded or packed
      </Typography>
    ),
  },
};

const Row6 = ({ crowd1, crowd2, crowd3 }) => {
  const [show, setShow] = useState(false);

  return (
    <Grid item container color={textColor}>
      {/* 6th row meta data component */}
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
          {/* 6th row meta data */}
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
            Extent of crowding in the vehicle
          </Typography>
          {/* 6th row expand more or less icon */}
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
        {/* 6th row 1st column */}
        <Grid item container xs bgcolor={columnColor.column1} py={2}>
          <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
            {seatInfo[crowd1]?.icon}
            {seatInfo[crowd1]?.msg}
          </Stack>
        </Grid>
        {/* 6th row 2nd column */}
        <Grid item container xs bgcolor={columnColor.column2} py={2}>
          <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
            {seatInfo[crowd2]?.icon}
            {seatInfo[crowd2]?.msg}
          </Stack>
        </Grid>
        {/* 6th row 3rd column */}
        <Grid item container xs bgcolor={columnColor.column3} py={2}>
          <Stack alignItems={'center'} justifyContent={'center'} width={'100%'}>
            {seatInfo[crowd3]?.icon}
            {seatInfo[crowd3]?.msg}
          </Stack>
        </Grid>
        {/* 6th row 4th column */}
        <Grid item container xs bgcolor={columnColor.column4} py={2}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            fontSize={'1.5rem'}
          >
            {/* Since no data is provided it is empty shown with two dashes */}
            --
          </Stack>
        </Grid>
        {/* 6th row 5th column */}
        <Grid item container xs bgcolor={columnColor.column5} py={2}>
          <Stack
            alignItems={'center'}
            justifyContent={'center'}
            width={'100%'}
            fontSize={'1.5rem'}
          >
            {/* Since no data is provided it is empty shown with two dashes */}
            --
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Row6;
