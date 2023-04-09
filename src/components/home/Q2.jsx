import {
  Button,
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
  useTheme,
} from '@mui/material';
import { useAnswer } from '../../context/AnswerContext';
import { ChevronLeft } from '@mui/icons-material';

const ID = 'answer2';

export const Question2 = ({ setCollapse }) => {
  const { answer2, setAnswer2, handleSubmit } = useAnswer();
  const theme = useTheme();

  const helperText = 'Choose from the above options';

  const handleAnswer = e => {
    setAnswer2(e.target.value);
  };

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
              Q2. What is the total distance between your home and workplace?
            </Typography>
          </FormLabel>
          <RadioGroup
            aria-labelledby={ID}
            name={ID}
            value={answer2}
            onChange={handleAnswer}
            sx={{
              pt: 0.5,
              pl: 1,
            }}
          >
            {/* 1st option */}
            <FormControlLabel value="0" control={<Radio />} label="< 5 km" />

            {/* 2nd option */}
            <FormControlLabel value="1" control={<Radio />} label="5 - 10 km" />

            {/* 3rd option */}
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="10 - 15 km"
            />

            {/* 4th option */}
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="15 - 20 km"
            />

            {/* 5th option */}
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="20 - 25 km"
            />

            {/* 6th option */}
            <FormControlLabel value="5" control={<Radio />} label="> 25 km" />
          </RadioGroup>

          {/* helpertext is rendered here */}
          <FormHelperText sx={{ fontSize: '0.9rem' }}>
            {answer2 ? '' : helperText}
          </FormHelperText>
        </FormControl>
        <Stack direction={'row'} justifyContent={'space-between'} p={1}>
          <Tooltip title="Back" arrow>
            {/* to navigate to the previous i.e. Q1 page, always activated */}
            <IconButton
              onClick={handleClick}
              sx={{
                backgroundColor: '#e1e8f2',
                '&:hover': {
                  backgroundColor: '#e1e8f2',
                },
              }}
            >
              <ChevronLeft htmlColor={theme.palette.primary.dark} />
            </IconButton>
          </Tooltip>
          {/* button that submits the responses of the questions and navigates the user to the 2nd page */}
          <Button
            disabled={answer2 ? false : true}
            variant="contained"
            onClick={handleSubmit}
          >
            Next
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};
