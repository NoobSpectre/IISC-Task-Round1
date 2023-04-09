import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useAnswer } from '../../context/AnswerContext';
import { ChevronRight } from '@mui/icons-material';
import { useTheme } from '@emotion/react';

const ID = 'answer1';

export const Question1 = ({ setCollapse }) => {
  // answer1 corresponds to the response of Q1 and setAnswer1 is the function to set the answer1 state
  const { answer1, setAnswer1 } = useAnswer();
  const theme = useTheme(); // the theme of Material UI

  // text shown at the bottom if no option is selected
  const helperText = 'Choose from the above options';

  // function to handle the answer1
  const handleAnswer = e => {
    setAnswer1(e.target.value);
  };

  // function to handle show/hide of the question component
  const handleClick = () => {
    setCollapse(prev => !prev);
  };

  return (
    <Paper
      sx={{
        py: 2,
        px: 3,
        transition: 500,
        '&:hover': {
          boxShadow: '0 0 5px',
        },
      }}
      elevation={5}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <FormControl>
          <FormLabel id={ID}>
            <Typography sx={{ color: 'black' }}>
              Q1. What is your most frequently used means of travel from your
              home to work location?
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby={ID}
            name={ID}
            value={answer1}
            onChange={handleAnswer}
            sx={{
              pt: 0.5,
              pl: 1,
            }}
          >
            {/* 1st option */}
            <FormControlLabel value="Bus" control={<Radio />} label="Bus" />
            {/* 2nd option */}
            <FormControlLabel value="Metro" control={<Radio />} label="Metro" />
            {/* 3rd option */}
            <FormControlLabel
              value="Own Two-wheeler"
              control={<Radio />}
              label="Own Two-wheeler"
            />
            {/* 4th option */}
            <FormControlLabel
              value="Own Car"
              control={<Radio />}
              label="Own Car"
            />
            {/* 5th option */}
            <FormControlLabel
              value="Walk/Bicycle"
              control={<Radio />}
              label="Walk/Bicycle"
              />
            {/* 6th option */}
            <FormControlLabel value="Auto" control={<Radio />} label="Auto" />
            {/* 7th option */}
            <FormControlLabel
              value="App based ride hailing cab services including Ola/Uber"
              control={<Radio />}
              label="App based ride hailing cab services including Ola/Uber"
            />
          </RadioGroup>
          {/* helpertext rendered here */}
          <FormHelperText sx={{ fontSize: '0.9rem' }}>
            {answer1 ? '' : helperText}
          </FormHelperText>
        </FormControl>
        <Stack direction={'row'} justifyContent={'flex-end'} p={1}>
          <Tooltip title="Next" arrow>
            <span>
              {/* navigate to next Q2, only activates if Q1 response is selected */}
              <IconButton
                disabled={answer1 ? false : true}
                onClick={handleClick}
                sx={{
                  backgroundColor: answer1 ? '#e1e8f2' : '',
                  '&:hover': {
                    backgroundColor: answer1 ? '#e1e8f2' : '',
                  },
                }}
              >
                <ChevronRight
                  htmlColor={answer1 ? theme.palette.primary.dark : ''}
                />
              </IconButton>
            </span>
          </Tooltip>
        </Stack>
      </form>
    </Paper>
  );
};
