import React from 'react'
import { Button } from '@mui/material'

const TertiaryButton = ({ children, ...props }) => {
    return (
        <Button
            variant='text'
            color='button'
            {...props}
        >
            {children}
        </Button>
    )
}

export default TertiaryButton