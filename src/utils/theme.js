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
    fontWeight: {
      tableTitle: '600'
    },
    fontSize: {
      tableTitle: "1.5rem",
      icon: "1.5rem"
    }
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ variant }) => ({
          backgroundColor: variant === 'secondary' ? '#1F1D2B' : '#EA7C69',
          spacing: 0.5
        })
      }
    }
  }
});

export default theme;
