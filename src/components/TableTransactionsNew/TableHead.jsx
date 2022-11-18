import React from 'react';
import RowContext from './TableRow/RowContext';
import Coll_Title from './Collumns/Coll_Title';
import { useTableContext } from './TableContext';

import { TableStyles as s } from './TableStyleSheet';
const TableHead = ({ className, children }) => {
  const { tableTitles } = useTableContext();

  const Coll = Coll_Title;
  return (
    <div className={s.tHead}>
      <RowContext>
        <div className={s.trHead}>
          {tableTitles.map((title, idx) => {
            if (Coll) {
              return <Coll key={title.id} title={title} colIdx={idx} />;
            }
            return <p>error coll {idx}</p>;
          })}
        </div>
        {/* <Row /> */}
      </RowContext>
    </div>
  );
};

export default TableHead;
