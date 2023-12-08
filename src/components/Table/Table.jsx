import PropTypes from 'prop-types';
import Row from "./Row/Row";
import Column from "./Column/Column";

const Table = ({ title, column, rows }) => {
  return (
    <div className="bg-dark-bg-2 text-white border border-dark-bg-2 rounded-md">
      <h1 className="ms-4 mt-2 text-2xl font-semibold text-primary">{title}</h1>
      <table className="table-auto w-full">
        <thead>
          <Column column={column}/>
        </thead>
        <tbody>
          {
            rows.map((row, index) => (
              <Row key={index} row={row}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  column: PropTypes.arrayOf(PropTypes.string),
  rows: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default Table;
