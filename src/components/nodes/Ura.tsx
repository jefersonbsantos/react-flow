import { NodeProps, Handle, Position } from "reactflow";

const Ura = (props: NodeProps) => {
    return (
        <div className="bg-blue-950 rounded w-[200px]">
            <p className="text-gray-200 text-center border-b border-b-stone-400 p-4">
                URA
            </p>
            <div></div>
            <div className="text-right pr-4">
                <p className="text-slate-500">Opção 0</p>
                <p className="text-slate-500">Opção 1</p>
                <p className="text-slate-500">Opção 2</p>
                <p className="text-slate-500">Opção 3</p>
                <p className="text-slate-500">Opção 4</p>
                <p className="text-slate-500">Opção 5</p>
                <p className="text-slate-500">Opção 6</p>
                <p className="text-slate-500">Opção 7</p>
                <p className="text-slate-500">Opção 8</p>
                <p className="text-slate-500">Opção 9</p>
                <p className="text-slate-500">Opção Inválida</p>
            </div>
            <Handle
                position={Position.Left}
                id="left"
                type="source"
                className="-left-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right4"
                type="source"
                className="-right-5 w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right1"
                type="source"
                className="-right-5 top-[4.1rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right2"
                type="source"
                className="-right-5 top-[5.8rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right3"
                type="source"
                className="-right-5 top-[7.4rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right5"
                type="source"
                className="-right-5 top-[8.8rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right6"
                type="source"
                className="-right-5 top-[11.8rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right7"
                type="source"
                className="-right-5 top-[13.3rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right8"
                type="source"
                className="-right-5 top-[14.8rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right9"
                type="source"
                className="-right-5 top-[16.3rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right10"
                type="source"
                className="-right-5 top-[17.8rem] w-3 h-3 bg-blue-400/80"
            />
            <Handle
                position={Position.Right}
                id="right10"
                type="source"
                className="-right-5 top-[19.5rem] w-3 h-3 bg-blue-400/80"
            />
        </div>
    );
};

export default Ura;
