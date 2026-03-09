import React from 'react'
import { useState } from 'react';
import {Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';


export const SumNode = ({ id }) => {

   
   const [valA, setValA] = useState(0);
   const [valB, setValB] = useState(0);
   const [sumValue, setSumValue] = useState(0);
   
  
    const handleValueChangeA = (e) => {
      setValA(e.target.value);
    };
  
      const handleValueChangeB = (e) => {
      setValB(e.target.value);
    };
    
    const handleSubmit = (e) =>{
       e.preventDefault();
      setSumValue(Number(valA)+ Number(valB));
    }

 return (
    <div className="node-container">
      <NodeHeader title="Sum"/>
      
      <div>
        <form onSubmit={handleSubmit}>
        <label>
          ValueA:
          <input 
            type="number"
            value={valA} 
            onChange={handleValueChangeA} 
          />
        </label>
        <label>
          ValueB:
          <input 
            type="number"
            value={valB} 
            onChange={handleValueChangeB} 
          />
        </label>
        <button>Sum</button>

      </form>
        
      </div>
      <div>{sumValue}</div>

      <NodeConnection type="source" position={Position.Right} id={`${id}-value`}/>
    </div>
  );
}
