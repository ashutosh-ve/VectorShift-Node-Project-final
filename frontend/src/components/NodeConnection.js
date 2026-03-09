
import { Handle } from 'reactflow'

export const NodeConnection = ({type, position, id, style}) => {
 return (
        <Handle
            type={type}
            position={position}
            id={id}
            style={style}
      />
    
  )
}
