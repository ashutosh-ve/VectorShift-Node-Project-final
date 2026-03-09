import React, { useState } from 'react'

import {Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';

export const ReverseNode = ({id}) => {
  const [inputString, SetInputString] = useState('');
    
    
        const handleChange = (e) =>{
            SetInputString(e.target.value);
        }
        
        const handleClick =()=>{
            SetInputString(inputString.split('').reverse().join(''));
        }    
        return (
          <div className="node-container">
            <NodeConnection type="target" position={Position.Left} id={`${id}-system`} style={{top: `${100/3}%`}}/>
            <NodeConnection type="target" position={Position.Left} id={`${id}-prompt`} style={{top: `${200/3}%`}}/>
      
            <NodeHeader title="Reverse"/>
    
            <input style={{ width: `${Math.max(inputString.length, 30)}ch` }} onChange={handleChange} />
            <button onClick={handleClick}>Reverse String</button>
            <div>
                {inputString}
            </div>
             <NodeConnection type="source" position={Position.Right} id={`${id}-response`} />
          </div>
        );
}
