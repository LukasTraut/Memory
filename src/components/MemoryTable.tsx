import "./MemoryTable.css";
import CreateCard from "./MemoryKarte";

const MemoryTable = ({
                       initialColumns,
                       initialRows,
                     }: {
  initialColumns: number;
  initialRows: number;
}) => {
  return (
      <div className="table-container">
        <table className="memory-table">
          <tbody>
          {Array.from({ length: initialRows }, (_, rowIndex) => (
              <tr key={rowIndex}>
                {Array.from({ length: initialColumns }, (_, colIndex) => (
                    <td key={colIndex}>
                        {rowIndex} / {colIndex}
                      <CreateCard index={rowIndex*initialColumns+colIndex}/>
                    </td>
                ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
};

export default MemoryTable;