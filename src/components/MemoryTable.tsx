import "./MemoryTable.css";
import MemoryCard from "./MemoryKarte";
import { useState } from "react";

const MemoryTable = ({
                       initialColumns,
                       initialRows,
                     }: {
  initialColumns: number;
  initialRows: number;
}) => {
  const [lastClickedCardIndex, setLastClickedCardIndex] = useState(-1);

  const handleClick = (index: number) => {
    setLastClickedCardIndex(index);
    console.log("MemoryTable click");
  };
  return (
    <div className="table-container">
      <table className="memory-table">
        <tbody>
        {Array.from({ length: initialRows }, (_, rowIndex) => (
          <tr key={rowIndex}>
            {Array.from({ length: initialColumns }, (_, colIndex) => (
              <td
                key={colIndex}
                onClick={() =>
                  handleClick(rowIndex * initialColumns + colIndex)
                }
              >
                {rowIndex} / {colIndex}
                <MemoryCard
                  index={rowIndex * initialColumns + colIndex}
                  lastClickedIndex={lastClickedCardIndex}
                />
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