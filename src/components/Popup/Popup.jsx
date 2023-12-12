import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import ActionButton from '../ActionButton/ActionButton';

const PopUp = (props) => {
    const {title, children, openPopUp, setOpenPopUp} = props;
    return(
        <Dialog open={openPopUp} maxWidth="md" sx={{padding: "16px", position: absolute, top: '40px'}}>
            <DialogTitle sx={{}}>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <ActionButton
                        color="secondary"
                        onClick={()=>{setOpenPopUp(false)}}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp;