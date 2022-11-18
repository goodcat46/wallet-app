import { Link } from 'react-router-dom';
import css from 'components/ButtonLink/ButtonLink.module.scss';
const ButtonLink = ({ text, navigateTo, children, onClick = null }) => {
  return (
    <Link to={navigateTo} className={css.link} onClick={onClick}>
      {text}
      {children}
    </Link>
  );
};
export default ButtonLink;
