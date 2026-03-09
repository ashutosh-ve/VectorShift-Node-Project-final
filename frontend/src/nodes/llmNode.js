// llmNode.js

import {Position } from 'reactflow';
import { NodeConnection } from '../components/NodeConnection';
import { NodeHeader } from '../components/NodeHeader';

export const LLMNode = ({ id}) => {

  return (
    <div className="node-container">
      <NodeConnection type="target" position={Position.Left} id={`${id}-system`} style={{top: `${100/3}%`}}/>
      <NodeConnection type="target" position={Position.Left} id={`${id}-prompt`} style={{top: `${200/3}%`}}/>

      <NodeHeader title="LLM"/>
      <div>
        <span>This is a LLM.</span>
      </div>
       <NodeConnection type="source" position={Position.Right} id={`${id}-response`} />
    </div>
  );
}
