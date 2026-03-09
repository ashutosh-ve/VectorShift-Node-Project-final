import React, { useState } from 'react'

import {Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';

export const LowerNode = ({ id, data }) => {
    const [inputText, setInputText] = useState('');


    const handleChange = (e) =>{
        const val = (e.target.value.toLowerCase());
        setInputText(val)
    }


    return (
      <div className="node-container">
        <NodeConnection type="target" position={Position.Left} id={`${id}-system`} style={{top: `${100/3}%`}}/>
        <NodeConnection type="target" position={Position.Left} id={`${id}-prompt`} style={{top: `${200/3}%`}}/>
  
        <NodeHeader title="ToLower"/>

        <input style={{ width: `${Math.max(inputText.length, 30)}ch` }} placeholder='inputText' onChange={handleChange}/>
        <div>
            {inputText}
        </div>
         <NodeConnection type="source" position={Position.Right} id={`${id}-response`} />
      </div>
    );
}
