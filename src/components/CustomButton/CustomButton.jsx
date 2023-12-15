import PropTypes from 'prop-types';
import classNames from 'classnames';

const CustomButton = ({
  title,
  variant = 'primary',
  onAction,
  className: customClass 
}) => {
  const primaryButtonClass = 'bg-primary border border-primary rounded shadow-lg shadow-brown text-white hover:bg-primary/70';
  const secondaryButtonClass = 'bg-secondary border border-secondary rounded text-black hover:bg-secondary/70';
  const tertiaryButtonClass = 'bg-tertiary border border-tertiary rounded text-white hover:bg-tertiary/70';

  let classes =''
  if (variant === 'primary'){
    classes = classNames('button', primaryButtonClass, customClass); 
  }
  else if (variant === 'secondary'){
    classes = classNames('button', secondaryButtonClass, customClass); 
  }
  else if (variant === 'tertiary'){
    classes = classNames('button', tertiaryButtonClass, customClass); 
  }
  else{
    classes = classNames('button', customClass);
  }
  const onActionFunc = (e) => {
    e.preventDefault();
    onAction.call();
  };

  return (
    <button
      type="button"
      onClick={(e) => {
        onActionFunc(e);
      }}
      className={classes}
    >
      <span>{title}</span>
    </button>
  );
};

CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.string,
  onAction: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CustomButton;
