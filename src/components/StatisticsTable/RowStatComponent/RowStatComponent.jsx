import React from 'react';
// import PropTypes from 'prop-types';
import { BASE_COLORS } from '../../../constans/constans';
import scss from '../StatisticsTable.module.scss';

const RowStatComponent = ({ data }) => {
  return data.map(({ name, total, type }, idx) => {
    const value = total.toString().slice(1);

    return (
      <tr key={idx} className={scss.tbodyRow}>
        <td className={[scss.colName, scss[`col-${idx + 1}`]].join(' ')}>
          <div
            style={{ backgroundColor: BASE_COLORS[idx] }}
            className={[scss.colored, scss[`colored-${idx + 1}`]].join(' ')}
          ></div>
          <div className={scss.divData}>{name}</div>
        </td>
        <td className={[scss.colData, scss[`col-${idx + 1}`]].join(' ')}>
          {value}
        </td>
      </tr>
    );
  });
};
// RowStatComponent.propTypes = {
//   labels: PropTypes.arrayOf(PropTypes.string),
//   backgroundColor: PropTypes.arrayOf(PropTypes.string),
//   data: PropTypes.arrayOf(PropTypes.number),
// };
export default RowStatComponent;
