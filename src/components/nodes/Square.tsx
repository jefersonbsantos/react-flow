import { NodeProps, Handle, Position } from "reactflow";

const Square = (props: NodeProps) => {
    return (
        <div className="bg-blue-950 rounded w-[200px] h-[200px]">
            <p className="text-gray-200 text-center border-b border-b-stone-400 p-4">
                Áudio
            </p>
            <div className="flex justify-center items-center h-[140px] pl-5">
                <label htmlFor="file_upload">Audio</label>
                <input id="file_upload" type="file" accept="audio/*" />
            </div>
            <Handle
                position={Position.Right}
                id="right"
                type="source"
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />
        </div>
    );
};

export default Square;
