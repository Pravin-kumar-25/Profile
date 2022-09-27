import React, { useState } from 'react'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const CustomInput = ({ type, ...props }) => {

    const [isShowPassword, setShowPassword] = useState(false)

    const showPasswordComponent = () => {
        return (
            <InputAdornment position='end'>
                <IconButton
                    onClick={() => setShowPassword(!isShowPassword)}
                >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
            </InputAdornment>
        )
    }

    return (
        <TextField
            color='primary'
            variant='filled'
            {...props}

            InputProps={{
                endAdornment: type === 'password' ? showPasswordComponent() : null,
                style: {
                    // width:'400px'
                },
                autoComplete: 'off'
            }}
            type={isShowPassword ? 'text' : type}
        />
    )
}

export default CustomInput