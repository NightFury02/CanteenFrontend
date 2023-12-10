import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const PopupButton = ({
    title,
    header,
    outline = '',
    variant = 'bg-primary',
    border = 'border border-primary rounded',
    shadow = 'shadow-lg shadow-brown',
    hover = 'hover:bg-primary/70',
    className: customClass,
    data,
  }) => {
    const classes = classNames('button', variant, outline, border, shadow, hover, customClass); 
    const popup = () => {
        console.log('popup');
    }

    const contentStyle = {
        width: '60%',
        height: '80%',
        padding: '10px 5px',
        backgroundColor: '#1F1D2B'
    };

    return (
        <Popup
        trigger={
            <button>
                <Button className={classes} title={title} onAction={() => popup()}/>
            </button>
        }
        modal
        contentStyle={contentStyle}
        >
        {close => (
            <div className="custom-popup-container">
                <div className="custom-popup-content">
                    <button className="close absolute left-2 bottom-2 text-black bg-light pt-1 pb-1 pl-5 pr-5 border border-light rounded" onClick={close}>
                        Hủy
                    </button>
                    <button className="absolute right-2 bottom-2 text-white bg-emerald-700 pt-1 pb-1 pl-16 pr-16 border border-emerald-700 rounded" onClick={() => popup()}>
                        Tạo tài khoản
                    </button>
                    <div className="custom-popup-header text-xl mt-2 mb-4 ml-3">{header}</div>
                    <div className="custom-popup-data ml-3 space-y-2">
                        {data}
                    </div>
                </div>
            </div>
        )}
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
    data: PropTypes.html,
};

export default PopupButton;