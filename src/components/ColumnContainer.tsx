import { Trash2 } from "lucide-react";
import { Column } from "../types";

interface Props {
  column: Column;
  deleteColumn: (id: string | number) => void;
}

const ColumnContainer = ({ column, deleteColumn }: Props) => {
  return (
    <div
      className="bg-indigo-200 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      key={column.id}
    >
      {/* COLUMN TITLE */}
      <div className="flex flex-row items-center justify-between text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-4 border-red-400 bg-violet-400">
        <div className="flex gap-2">
          <div className="bg-red-700 px-2 py-1 text-sm rounded-full">0</div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="bg-red-300 px-2 py-1 rounded"
        >
          <Trash2 />
        </button>
      </div>
      {/* COLUMN TASK CONTAINER */}
      <div className="flex flex-grow">Content</div>
      {/* COLUMN FOOTER */}
      <div>Footer</div>
    </div>
  );
};

export default ColumnContainer;
