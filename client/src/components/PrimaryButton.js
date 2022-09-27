import React from 'react'
import {LoadingButton} from '@mui/lab'

const PrimaryButton = ({ children, ...props }) => {

    return (
        <LoadingButton
            variant='contained'
            color='button'
            {...props}
        >
            {children}
        </LoadingButton>
    )
}

export default PrimaryButton