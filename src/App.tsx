import ReactFlow, {
    Background,
    Connection,
    ConnectionMode,
    Controls,
    Handle,
    Position,
    addEdge,
    useEdgesState,
    useNodesState,
} from "reactflow";
import { zinc } from "tailwindcss/colors";
import "reactflow/dist/style.css";
import Square from "./components/nodes/Square";
import { useCallback } from "react";
import DefaultEdge from "./components/edges/DefaultEdge";
import * as Toolbar from "@radix-ui/react-toolbar";
import Ura from "./components/nodes/Ura";
import Post from "./components/nodes/Post";
import Queue from "./components/nodes/Queue";

// Nodes, Edges

const NODE_TYPES = {
    square: Square,
    ura: Ura,
    post: Post,
    queue: Queue,
};

const EDGE_TYPES = {
    default: DefaultEdge,
};

const INITIAL_NODES = [
    {
        id: "Audio",
        type: "square",
        position: {
            x: 200,
            y: 200,
        },
        data: {},
    },
] satisfies Node[];

function App() {
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [nodes, setNodes, onNodesChange] = useNodesState(INITIAL_NODES);

    const onConnect = useCallback((connection: Connection) => {
        return setEdges((edges) => addEdge(connection, edges));
    }, []);

    function addUraNode() {
        setNodes((nodes) => [
            ...nodes,
            {
                id: "Ura",
                type: "ura",
                position: {
                    x: 600,
                    y: 200,
                },
                data: {},
            },
        ]);
    }

    function addPOSTNode() {
        setNodes((nodes) => [
            ...nodes,
            {
                id: "Post",
                type: "post",
                position: {
                    x: 900,
                    y: 200,
                },
                data: {},
            },
        ]);
    }
    function addQueueNode() {
        setNodes((nodes) => [
            ...nodes,
            {
                id: "Queue",
                type: "queue",
                position: {
                    x: 900,
                    y: 500,
                },
                data: {},
            },
        ]);
    }

    // const isValidConnection = (connection) =>
    //     connection.target === "A" || connection.target === "B";
    // const onConnectStart = (_, { nodeId, handleType }) =>
    //     console.log("on connect start", { nodeId, handleType });
    // const onConnectEnd = (event) => console.log("on connect end", event);

    // const CustomInput = () => (
    //     <>
    //         <div>Only connectable with B</div>
    //         <Handle type="source" position={Position.Right} />
    //     </>
    // );

    // const CustomNode = ({ id }) => (
    //     <>
    //         <Handle type="target" position={Position.Left} />
    //         <div>{id}</div>
    //         <Handle type="source" position={Position.Right} />
    //     </>
    // );

    // const nodeTypes = {
    //     custominput: CustomInput,
    //     customnode: CustomNode,
    // };

    return (
        <>
            <div className="w-screen h-screen">
                <ReactFlow
                    nodeTypes={NODE_TYPES}
                    nodes={nodes}
                    edges={edges}
                    edgeTypes={EDGE_TYPES}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodesChange={onNodesChange}
                    connectionMode={ConnectionMode.Loose}
                    defaultEdgeOptions={{
                        type: "default",
                    }}
                >
                    <Background gap={12} size={2} color={zinc[200]} />
                    <Controls />
                </ReactFlow>

                <Toolbar.Root className="fixed bottom-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-20 w-[40rem] overflow-hidden">
                    <Toolbar.Button
                        onClick={addUraNode}
                        className="w-32 h-32 bg-violet-500 rounded mt-6 hover:-translate-y-2 transition-transform pb-12"
                    >
                        URA
                    </Toolbar.Button>
                    <Toolbar.Button
                        onClick={addPOSTNode}
                        className="w-32 h-32 bg-violet-500 rounded mt-6 hover:-translate-y-2 transition-transform pb-12 ml-1"
                    >
                        Post
                    </Toolbar.Button>
                    <Toolbar.Button
                        onClick={addQueueNode}
                        className="w-32 h-32 bg-violet-500 rounded mt-6 hover:-translate-y-2 transition-transform pb-12 ml-1"
                    >
                        Queue
                    </Toolbar.Button>
                </Toolbar.Root>
            </div>
        </>
    );
}

export default App;

// import React, { useCallback } from "react";
// import ReactFlow, {
//     useNodesState,
//     useEdgesState,
//     addEdge,
//     Handle,
//     Position,
// } from "reactflow";

// import "reactflow/dist/style.css";
// import "./global.css";

// const initialNodes = [
//     { id: "0", type: "custominput", position: { x: 0, y: 150 } },
//     { id: "A", type: "customnode", position: { x: 250, y: 0 } },
//     { id: "B", type: "customnode", position: { x: 250, y: 150 } },
//     { id: "C", type: "customnode", position: { x: 250, y: 300 } },
// ];

// const isValidConnection = (connection) => connection.target === "A";
// const onConnectStart = (_, { nodeId, handleType }) =>
//     console.log("on connect start", { nodeId, handleType });
// const onConnectEnd = (event) => console.log("on connect end", event);

// const CustomInput = () => (
//     <>
//         <div>Only connectable with B</div>
//         <Handle type="source" position={Position.Right} />
//     </>
// );

// const CustomNode = ({ id }) => (
//     <>
//         <Handle type="target" position={Position.Left} />
//         <div>{id}</div>
//         <Handle type="source" position={Position.Right} />
//     </>
// );

// const nodeTypes = {
//     custominput: CustomInput,
//     customnode: CustomNode,
// };

// const App = () => {
//     const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//     const [edges, setEdges, onEdgesChange] = useEdgesState([]);

//     const onConnect = useCallback(
//         (params) => setEdges((els) => addEdge(params, els)),
//         []
//     );

//     return (
//         <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange}
//             onEdgesChange={onEdgesChange}
//             onConnect={onConnect}
//             isValidConnection={isValidConnection}
//             selectNodesOnDrag={false}
//             className="validationflow"
//             nodeTypes={nodeTypes}
//             onConnectStart={onConnectStart}
//             onConnectEnd={onConnectEnd}
//             fitView
//             attributionPosition="bottom-left"
//         />
//     );
// };

// export default App;
