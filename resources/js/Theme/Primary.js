import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    50: '#ffbc39',
                    100: '#ffb318',
                    200: '#ffa612',
                    300: '#ff910f',
                    400: '#ff8a1a',
                    500: '#fe8713',
                    600: '#cb761c',
                    700: '#da7001',
                    800: '#e36a00',
                    900: '#ea6000',
                },
            },
        },
        dark: {
            palette: {
                primary: {
                    50: '#ffbc39',
                    100: '#ffb318',
                    200: '#ffa612',
                    300: '#ff910f',
                    400: '#ff8a1a',
                    500: '#fe8713',
                    600: '#cb761c',
                    700: '#da7001',
                    800: '#e36a00',
                    900: '#ea6000',
                },
            },
        },
    },
});

export default theme;
