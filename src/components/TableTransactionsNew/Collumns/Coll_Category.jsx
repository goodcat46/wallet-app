import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Category = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action],...className].join(' ');
  const { rowData } = useRowContext();
  const { categoryInfo } = rowData;
  return (
    <div className={classNames}>
      <div className={s.commentWrap}>
        {categoryInfo ? categoryInfo?.name : 'empty'}
      </div>
    </div>
  );
};

export default Coll_Category;
