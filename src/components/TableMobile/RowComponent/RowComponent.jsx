import React from 'react';
// import PropTypes from 'prop-types';
import scss from '../TableMobile.module.scss';

const RowComp = ({ tdTitle, value }) => {
  return (
    <tr className={scss.trow}>
      <th className={scss.th}>{tdTitle}</th>
      <td
        title={value}
        className={tdTitle !== 'sum' ? scss.td : [scss.sum, scss.td].join(' ')}
      >
        {value}
      </td>
    </tr>
  );
};

// RowComp.propTypes = {
//   tdTitle: PropTypes.string,
//   value: PropTypes.string,
// };
export default RowComp;
