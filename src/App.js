import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const initialElements = [];

const Flowchart = () => {
  const [elements, setElements] = useState(initialElements);

  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      deleteKeyCode={46}
      style={{ width: '100%', height: '100vh' }}
    >
      <MiniMap />
      <h1>himjfj</h1>
      <p>monopsan</p>
      salinity
      <Controls />
      <Background />
      <h1>he</h1>
    </ReactFlow>
  );
};

export default Flowchart;
