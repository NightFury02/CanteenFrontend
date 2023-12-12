import React, {useState} from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { TroubleshootOutlined } from '@mui/icons-material';

const PopupButton = ({
        title,
        isPopupOpen = true,
        header,
        onPopup = () => {},
        outline = '',
        variant = 'bg-primary',
        border = 'border border-primary rounded',
        shadow = 'shadow-lg shadow-brown',
        hover = 'hover:bg-primary/70',
        className: customClass,
        cancelClassName = "close absolute left-2 bottom-2 text-black bg-light pt-1 pb-1 pl-5 pr-5 border border-light rounded hover:bg-gray-100",
        children
    }) => {
    const [isOpen, setOpen] = useState(false);
    
    const classes = classNames('button', variant, outline, border, shadow, hover, customClass); 

    const contentStyle = {
        width: '60%',
        height: '85%',
        padding: '10px 5px',
        backgroundColor: '#1F1D2B'
    };

    return (
        <Popup
            open={isOpen && isPopupOpen}
            trigger={
                <button>
                    <Button className={classes} title={title} onAction={() => {onPopup(); setOpen(true);}} />
                </button>
            }
            modal
            contentStyle={contentStyle}
        >
            <div className="custom-popup-container">
                <div className="custom-popup-content">
                    <div className="custom-popup-header text-xl mt-2 mb-4 ml-3">{header}</div>
                    <div className="custom-popup-data ml-3 space-y-2">
                    {children}
                    </div>
                    <button className={cancelClassName}
                        onClick={() => {setOpen(false);}}>
                        Hủy
                    </button>
                </div>
            </div>
        </Popup>
    );
};
  
PopupButton.propTypes = {
    title: PropTypes.string.isRequired,
    header: PropTypes.string,
    outline: PropTypes.bool,
    variant: PropTypes.string,
    type: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.object,
    onPopup: PropTypes.func,
    isOpen: PropTypes.bool
};

export default PopupButton;