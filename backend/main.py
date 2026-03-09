from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allow local frontend to call endpoints
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3002"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(request: Request):
    """Accepts JSON with `nodes` and `edges`, returns counts and whether graph is a DAG."""
    data = await request.json()
    nodes = data.get('nodes', [])
    edges = data.get('edges', [])
    num_nodes = len(nodes)
    num_edges = len(edges)

    # build adjacency list
    adj = {node['id']: [] for node in nodes}
    for e in edges:
        src = e.get('source')
        tgt = e.get('target')
        if src in adj:
            adj[src].append(tgt)

    # detect cycle with DFS
    visited = set()
    recstack = set()
    is_dag = True

    def dfs(u):
        nonlocal is_dag
        visited.add(u)
        recstack.add(u)
        for v in adj.get(u, []):
            if v not in visited:
                dfs(v)
            elif v in recstack:
                is_dag = False
        recstack.remove(u)

    for n in list(adj.keys()):
        if n not in visited:
            dfs(n)
            if not is_dag:
                break

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag,
    }
