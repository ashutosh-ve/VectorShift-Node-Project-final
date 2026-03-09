// textNode.js
import { NodeHeader } from '../components/NodeHeader';
import { useState } from 'react';
import { Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { GrAction } from "react-icons/gr";
export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <div className="node-container">
     
      <NodeHeader title="Input"/>
      <div style={{ flex: 1 }}>
        <label>
          <GrAction />
          Text:
          <input style={{ width: `${Math.max(currText.length, 30)}ch` }}
            className='custom-input' 
            type="text" 
            value={currText} 
            onChange={handleTextChange} 
          />
        </label>
      </div>
      {currText==='{{input}}'?<NodeConnection type="source" position={Position.Left} id={`${id}-output`}/>: ''}
      {currText==='{{output}}'?<NodeConnection type="source" position={Position.Right} id={`${id}-output`}/>: ''}
    
      
    </div>
  );
}
