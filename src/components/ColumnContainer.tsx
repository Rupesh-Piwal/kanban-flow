import { Trash2 } from "lucide-react";
import { Column } from "../types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Props {
  column: Column;
  deleteColumn: (id: string | number) => void;
}

const ColumnContainer = ({ column, deleteColumn }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        className="bg-[#262626] border border-[#363636] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col opacity-60"
        ref={setNodeRef}
        style={style}
      >
        hello
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-[#262626] border border-[#363636] w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      key={column.id}
    >
      {/* COLUMN TITLE */}
      <div
        {...attributes}
        {...listeners}
        className="flex flex-row items-center justify-between text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-semibold border-2 border-[#363636] bg-[#161616] text-[#FAFAFA]"
      >
        <div className="flex gap-2">
          <div className="bg-red-700 px-2 py-1 text-sm rounded-full">0</div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="hover:bg-[#262626] px-2 py-1 rounded-[10px]"
        >
          <Trash2 className="text-slate-500 hover:text-red-600" />
        </button>
      </div>
      {/* COLUMN TASK CONTAINER */}
      <div className="flex flex-grow text-[#c2d4d4]">Content</div>
      {/* COLUMN FOOTER */}
      <div className="text-[#c2d4d4]">Footer</div>
    </div>
  );
};

export default ColumnContainer;
