import PropTypes from 'prop-types';

const Table = ({ title, columns }) => {
  return (
    <div className="bg-dark-bg-2 text-white border border-dark-bg-2 rounded-md">
      <h1 className="ms-4 mt-2 text-2xl font-semibold text-primary">{title}</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            {columns.map((column, index) => {
              return (
                <th key={index} className="p-4 text-left">{column}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="border-t border-dark-bg-1">
            <td className="p-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td className="p-4">Malcolm Lockyer</td>
            <td className="p-4">1961</td>
            <td className="p-4">Malcolm Lockyer</td>
            <td className="p-4">Malcolm Lockyer</td>
          </tr>
          <tr className="border-t border-dark-bg-1">
            <td className="p-4">Witchy Woman</td>
            <td className="p-4">The Eagles</td>
            <td className="p-4">1972</td>
            <td className="p-4">Malcolm Lockyer</td>
            <td className="p-4">Malcolm Lockyer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  title: PropTypes.string.isRequired,
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Table;
