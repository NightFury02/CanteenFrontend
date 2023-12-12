import React from 'react'
import {Button} from '@mui/material';

export default function ActionButton(props) {

    const {variant = 'primary', children, onClick } = props;

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color={variant}
        >
            {children}
        </Button>
    )
}