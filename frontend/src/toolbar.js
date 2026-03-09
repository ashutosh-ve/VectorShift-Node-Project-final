// toolbar.js

import { DraggableNode } from './draggableNode';
import { DiCelluloid } from "react-icons/di";
import { DiAptana } from "react-icons/di";
import { DiAppstore } from "react-icons/di";
import { DiCss3Full } from "react-icons/di";
import { FcFilingCabinet } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { FcFeedIn } from "react-icons/fc";





export const PipelineToolbar = () => {
    const iconLower = <DiCelluloid style={{ color: "#fcfdfe", fontSize: "30px" }}/>
    const iconllm = <DiAptana  style={{ color: "#fcfdfe", fontSize: "20px" }}/>
    const iconOutput = <DiAppstore style={{ color: "#fcfdfe", fontSize: "30px" }}/>
    const iconText = <DiAptana  style={{ color: "#fcfdfe", fontSize: "20px" }}/>
    const iconSum = <DiCss3Full style={{ color: "#fcfdfe", fontSize: "30px" }}/>
    const iconUpper = <FcFilingCabinet  style={{ color: "#fcfdfe", fontSize: "20px" }}/>
    const iconRandom = <FcEnteringHeavenAlive style={{ color: "#fcfdfe", fontSize: "30px" }}/>
    const iconReverse = <FcFeedIn  style={{ color: "#fcfdfe", fontSize: "20px" }}/>


    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' icon={iconSum}/>
                <DraggableNode type='llm' label='LLM' icon={iconllm}/>
                <DraggableNode type='customOutput' label='Output' icon={iconOutput}/>
                <DraggableNode type='text' label='Text' icon={iconText}/>
                <DraggableNode type='sum' label='Sum' icon={iconSum}/>
                <DraggableNode type='upper' label='Upper' icon={iconUpper}/>
                <DraggableNode type='random' label='Random' icon={iconLower}/>
                <DraggableNode type='reverse' label='Reverse' icon={iconRandom}/>
                <DraggableNode type='lower' label='Lower' icon={iconReverse} />

                
            </div>
        </div>
    );
};
