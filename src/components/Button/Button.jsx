import css from 'components/Button/Button.module.scss';
const Button = ({ buttonType, text, children, onClick = null }) => {
  return (
    <button type={buttonType} className={css.button} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
