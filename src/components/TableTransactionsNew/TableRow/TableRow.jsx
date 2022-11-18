import React from 'react';
import RowTop from './RowTop';
import RowForm from '../RowForm/RowForm';
import Modal from 'components/Modal/Modal';
import { useRowContext } from './RowContext';

import s from './TableRow.module.scss';

const TableRow = () => {
  const { isBottomOpen, handleRowBottomFormOpen, handleRowBottomFormClose } =
    useRowContext();

  return (
    <div className={s.tRow} onDoubleClick={handleRowBottomFormOpen}>
      <RowTop />
      {isBottomOpen && (
        // <TablePortal>
        <Modal defaultBtn={false} handleToggle={handleRowBottomFormClose}>
          <div className={s.rowModal}>
            {/* <RowTop /> */}
            <RowForm />
          </div>
        </Modal>
        // </TablePortal>
      )}
    </div>
  );
};

export default TableRow;
