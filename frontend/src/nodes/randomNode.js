
import { useState } from 'react'
import {Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';

export const RandomNode = ({id}) => {
      const [randomNum, SetRandomNum] = useState(0);
  
  
      const handleClick = () =>{
          SetRandomNum(Number(Math.random()*10));
      }
  
  
      return (
        <div className="node-container">
          <NodeConnection type="target" position={Position.Left} id={`${id}-system`} style={{top: `${100/3}%`}}/>
          <NodeConnection type="target" position={Position.Left} id={`${id}-prompt`} style={{top: `${200/3}%`}}/>
    
          <NodeHeader title="Random"/>
  
          <button onClick={handleClick}>Random</button>
          <div>
              {randomNum}
          </div>
           <NodeConnection type="source" position={Position.Right} id={`${id}-response`} />
        </div>
      );
}
