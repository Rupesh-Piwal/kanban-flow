import { CirclePlus } from "lucide-react";
import { useEffect, useState } from "react";
import { Column } from "../types";
import ColumnContainer from "./ColumnContainer";

const Board = () => {
  const [columns, setColumns] = useState<Column[]>([]);

  useEffect(() => {
    console.log(columns);
  }, [columns]);

  const generateId = () => Math.floor(Math.random() * 10001).toString(); // Ensuring id is a string

  const createColumn = () => {
    const newColumn: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };

    setColumns((prevColumns) => [...prevColumns, newColumn]);
  };

  const deleteColumn = (id: string | number) => {
    const filterColumns = columns.filter((col) => col.id !== id);
    setColumns(filterColumns);
  };

  return (
    <div className="m-auto flex min-h-screen w-full items-center overflow-x-auto overflow-y-hidden px-[40px]">
      <div className="m-auto text-center">
        {columns.map((col) => (
          <ColumnContainer
            key={col.id}
            column={col}
            deleteColumn={deleteColumn}
          />
        ))}
        <button
          onClick={createColumn}
          className="h-[60px] w-[350px] min-w-[350px] cursor-pointer rounded-lg bg-indigo-600 p-4 ring-rose-500 hover:ring-2 flex gap-2 text-white"
        >
          <CirclePlus />
          Add Column
        </button>
      </div>
    </div>
  );
};

export default Board;
