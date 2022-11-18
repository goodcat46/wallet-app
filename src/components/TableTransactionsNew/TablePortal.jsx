import ReactDOM from 'react-dom';

const TablePortal = props => {
  const tableRef = document.getElementById('table-root');
  return ReactDOM.createPortal(props.children, tableRef);
};

export default TablePortal;
