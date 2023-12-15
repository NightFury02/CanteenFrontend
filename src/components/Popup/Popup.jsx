import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Dialog, DialogTitle, DialogContent} from '@mui/material';
import ActionButton from '../ActionButton/ActionButton';

const PopUp = (props) => {
    const {title, children, openPopUp, setOpenPopUp} = props;
    return(
        <Dialog 
        open={openPopUp} 
        maxWidth="md" 
        sx={{padding: "16px", position: 'absolute'}}>
            <DialogTitle sx={{backgroundColor: 'background.secondary'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1, marginRight: '24px', fontSize: '24px' }}>
                        {title}
                    </Typography>
                    <ActionButton
                        sx={{backgroundColor: 'background.secondary', boxShadow: 'none', px: '6px', minWidth: '0px', border: 'none'}}
                        onClick={()=>{setOpenPopUp(false)}}>
                        <CloseIcon />
                    </ActionButton>
                </div>
            </DialogTitle>
            <DialogContent dividers sx={{backgroundColor: 'background.secondary', display: 'flex', justifyContent: 'center'}}>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default PopUp;