import s from './IconButton.module.css';

const IconButton = ({
  children = null,
  onClick = null,
  title = null,
  ...allyProps
}) => {
  return (
    <button
      type="button"
      className={s.button}
      onClick={onClick}
      title={title}
      {...allyProps}
    >
      {' '}
      Click me
      {children}
    </button>
  );
};

export default IconButton;
