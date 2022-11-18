import React from 'react';
import { useMediaQuery } from 'react-responsive';
import css from './DeviceTypeInformer.module.css';

const DeviceTypeInformer = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  const isDesktop = useMediaQuery({ minWidth: 1280 });
  return (
    <div className={css.device}>
      <p>Mobile</p> <p>{isMobile ? 'YES' : 'NO'}</p>
      <p>Tablet</p> <p>{isTablet ? 'YES' : 'NO'}</p>
      <p>Desktop</p> <p>{isDesktop ? 'YES' : 'NO'}</p>
    </div>
  );
};

export default DeviceTypeInformer;
