import { NodeProps, Handle, Position } from "reactflow";

const Queue = (props: NodeProps) => {
    return (
        <div className="bg-blue-950 rounded w-[200px] h-[200px]">
            <p className="text-gray-200 text-center border-b border-b-stone-400 p-4">
                Queue
            </p>
            <Handle
                position={Position.Left}
                id="left_queue"
                type="source"
                className="-left-5 w-3 h-3 bg-blue-400/80"
            />
        </div>
    );
};

export default Queue;
