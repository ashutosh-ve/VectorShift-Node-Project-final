// outputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';


export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <div className="node-container">
       <NodeConnection type="target" position={Position.Left} id={`${id}-value`} />
       <NodeHeader title="Output"/>

      <div>
        <label>
          Name:
          <input style={{ width: `${Math.max(currName.length, 30)}ch` }} 
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );
}
