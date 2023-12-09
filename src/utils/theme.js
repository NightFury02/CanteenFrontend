import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background:{
        primary: '#EA7C69',
        secondary: '#1F1D2B',
        tertiary: '#393C49'
    },
    text:{
        primary: '#EA7C69',
        white: '#fff',
        grey: '##ABBBC2',
        preparing: '#9290FE',
        complete: '#50D1AA',
        pending: '#FFB572'
    },
    action:{
        preparing: 'rgba(146, 144, 254, 0.20)',
        complete: 'rgba(107, 226, 190, 0.24)',
        pending: 'rgba(255, 181, 114, 0.20)'
    },
    status:{

    }
  },
  typography: {
    fontFamily: 'Barlow',
  },
});

export default theme;
