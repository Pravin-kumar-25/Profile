import React from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const ThemeIcon = ({ theme, setTheme }) => {

    const changeTheme = () => {
        localStorage.setItem('theme',!theme)
        setTheme(!theme)
    }

    return (
        <div className='theme-icon' onClick={changeTheme}>
            {
                theme ? <DarkModeIcon sx={{ color: 'white'}} /> : <LightModeIcon />
            }
        </div>
    )
}

export default ThemeIcon