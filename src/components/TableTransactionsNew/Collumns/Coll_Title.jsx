import React from 'react';

import s from './Coll.module.scss'

const Coll_Title = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action], ...className].join(' ');

  return <div className={classNames}>{title?.name}</div>;
};

export default Coll_Title;
