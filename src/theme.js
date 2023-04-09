import { createTheme } from '@mui/material';

export const columnColor = {
  column1: '#228B22 ',
  column2: '#800000',
  column3: '#CC5500',
  column4: '#8E7618',
  column5: '#fdb750',
};

export const textColor = '#eff';

export const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        disableRipple: true,
        disableFocusRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiRadio: {
      defaultProps: {
        size: 'small',
      },
    },
  },
});
