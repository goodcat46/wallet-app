import scss from './NotFoundPage.module.scss';
import Header from 'components/Header/Header';

const NotFoundPage = () => {
  return (
    <>
      <Header />
      <div className={scss.NotFoundPage}>NotFoundPage</div>
    </>
  );
};

export default NotFoundPage;
