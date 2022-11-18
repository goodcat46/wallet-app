import React from 'react';
import { useRowContext } from '../TableRow/RowContext';

import s from './Coll.module.scss';

const Coll_Comment = ({ title, colIdx, className = '' }) => {
  const classNames = [s.col, s[title?.action],...className].join(' ');
  const { rowData } = useRowContext();

  return (
    <div className={classNames}>
      <div className={s.commentWrap}>{rowData.comment}</div>
    </div>
  );
};

export default Coll_Comment;
