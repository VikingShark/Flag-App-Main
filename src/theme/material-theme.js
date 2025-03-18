import { createTheme } from '@mui/material';

export const themeOptions = createTheme({
    typography: {
        fontFamily: "'Open Sans', sans-serif",
      },
    palette: {
        darkmode: {
            primary: {
                main: '#2B3844', 
                darkblue: '#202C36',
                white: '#F2F2F2',
                hover: '#F2F2F220'
            },
            divider: '#292929'
        },
        lightmode: {
            primary: {
                main: '#F2F2F2',
                black: '#000000',
                hover: '#00000010'
            },
            divider: '#E0E0E0'
        }
        
    }
});