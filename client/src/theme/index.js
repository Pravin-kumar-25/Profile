import { createTheme } from '@mui/material/styles';

const commonTheme = {
    paper: {
        spacing: ['1px', '5px', '10px']
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    padding: '20px'
                }
            }
        }
    },
}

const headingFontFamily = {
    fontFamily: [
        '"Dangrek", cursive'
    ].join(',')
}

const commonTypographyTheme = {
    // button: {
    //     // fontWeight:500,
    //     // fontSize:'20px'
    // },
    fontFamily: [
        "'Poppins', sans-serif",
    ].join(',')
}


export const darkTheme = createTheme({
    ...commonTheme,
    // components: {
    //     MuiPaper: {
    //         styleOverrides: {
    //             root: {
    //                 background: 'primary.main'
    //             }
    //         }
    //     }
    // },
    palette: {
        mode: 'dark',
        primary: {
            main: '#251D3A' //dark dark blue
        },
        secondary: {
            main: '#2A2550' // dark blue
        },
        tertiary: {
            main: '#323232', //grey
            contrastText: '#323232'
        },
        button: {
            main: '#FF1E56' //red
        },
        fonts: {
            main: '#FFAC41',  //orange
            secondary: '#fafafa',   // greying white
            greyish: '#e0e0e0'   // grey
        }
    },
    typography: {
        h4: {
            color: '#FFAC41',
            ...headingFontFamily
        },
        ...commonTypographyTheme
    }
})

export const whiteTheme = createTheme({
    ...commonTheme,
    palette: {
        mode: 'light',
        primary: {
            main: '#FFE2E2', //light white
        },
        secondary: {
            main: '#FFC7C7' //rose white
        },
        tertiary: {
            main: '#AAAAAA' // light grey
        },
        button: {
            main: '#FF1E56', // red
            contrastText: 'white'
        },
        fonts: {
            main: '#323232',  //thick grey
            secondary: '#DA7F8F',   // greying red
            greyish: '#A7BBC7'   // grey blue
        },
        // background: {
        //     paper: '',
        // }
    },
    typography: {
        h4: {
            color: '#323232',
            ...headingFontFamily
        },
        ...commonTypographyTheme
    }
})