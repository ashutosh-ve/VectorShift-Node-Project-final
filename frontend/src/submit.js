import { useStore } from './store';
import './nodes/Node.css';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleClick = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8005';

    try {
      const res = await fetch(`${apiUrl}/pipelines/parse`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nodes, edges }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(`Submit failed: ${res.status}`);
        return;
      }

      alert(
        `Nodes: ${data.num_nodes} \n  Edges: ${data.num_edges} \n  DAG: ${data.is_dag}`
      );
    } catch (error) {
      alert(`Error submitting pipeline: ${error.message}`);
    }
  };

  return (
    <div className="node-container" >
      <button className="node-container" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};