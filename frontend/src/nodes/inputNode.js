// inputNode.js
import './Node.css';
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
    
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };


  return (
    <div className="node-container" >
      <NodeHeader title="Input  "/>
      <div>
        <label>
          Name:
          <input style={{ width: `${Math.max(currName.length, 30)}ch` }} className='custom-input'
            type="text" 
            value={currName} 
            onChange={handleNameChange} 
          />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>

      <NodeConnection type="source" position={Position.Right} id={`${id}-value`}/>
    </div>
  );
}
