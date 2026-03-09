// draggableNode.js
import { DiCelluloid } from "react-icons/di";
export const DraggableNode = ({ type, label, icon }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={type}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
        cursor: 'grab',
        minWidth: '100px',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        borderRadius: '12px',
        backgroundColor: '#1C2536',
        border: '1px solid #334155',
        transition: 'all 0.2s ease',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        gap: '8px'
        }} 
        draggable
      >
          <span style={{ color: '#F3F4F6',  fontSize: '12px',fontWeight: '500',fontFamily: 'Inter, sans-serif' 
      }}>{label}</span>
         
         {icon}
      </div>
    );
  };
  