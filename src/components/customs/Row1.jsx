import { Grid, Radio, Typography } from '@mui/material';

export const CustomRow1Item = ({
  selectedValue,
  value,
  handleChange,
  bgcolor,
}) => {
  return (
    <Grid
      item
      xs
      sx={{
        textAlign: 'center',
        flexDirection: 'column',
        pt: 1,
        pb: 0.2,
        bgcolor,
      }}
    >
      <Typography
        sx={{ fontWeight: 'bold', fontSize: { xs: '0.7rem', sm: '1rem' } }}
      >
        {value}
      </Typography>
      {/* Standalone radio option */}
      <Radio
        id={value}
        checked={selectedValue === value}
        value={value}
        onChange={handleChange}
        name="mode"
        size="small"
        disableRipple
        sx={{
          color: '#fff',
          '&.Mui-checked': {
            color: '#fff',
          },
        }}
      />
    </Grid>
  );
};
