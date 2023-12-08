import PropTypes from 'prop-types';
import classNames from 'classnames'; // Import class merging

const Button = ({
  title,
  outline = '',
  variant = 'bg-primary',
  onAction,
  type = 'button',
  border = 'border border-primary rounded',
  shadow = 'shadow-lg shadow-brown',
  textColor = 'text-white',
  hover = 'hover:bg-primary/70',
  className: customClass 
}) => {
  const classes = classNames('button', variant, outline, border, shadow, hover, customClass); 

  const onActionFunc = (e) => {
    e.preventDefault();
    onAction.call();
  };

  return (
    <button
      type={type}
      onClick={(e) => {
        onActionFunc(e);
      }}
      className={classes}
    >
      <span className={textColor}>{title}</span>
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  variant: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string
};

export default Button;
