
import { useState } from 'react';
import { floydWarshall, getPath } from './FloydWarshall';  // Import path functions

const GraphVisualizer = () => {
    const [n, setN] = useState(5);
    const [connections, setConnections] = useState([{ user1: '', user2: '' }]);
    const [graph, setGraph] = useState(createEmptyGraph(5));
    const [shortestPathInfo, setShortestPathInfo] = useState(null);
    const [source, setSource] = useState(1);
    const [destination, setDestination] = useState(3);

    function createEmptyGraph(size) {
        const matrix = Array(size).fill().map(() => Array(size).fill(Infinity));
        for (let i = 0; i < size; i++) matrix[i][i] = 0;
        return matrix;
    }

    const handleUserInput = (e) => {
        const size = parseInt(e.target.value);
        setN(size);
        setGraph(createEmptyGraph(size));
        setConnections([{ user1: '', user2: '' }]);
    };

    const handleConnectionChange = (index, e) => {
        const updatedConnections = [...connections];
        updatedConnections[index][e.target.name] = e.target.value;
        setConnections(updatedConnections);
    };

    const handleAddConnection = () => {
        setConnections([...connections, { user1: '', user2: '' }]);
    };

    const initializeGraph = () => {
        const newGraph = createEmptyGraph(n);
        connections.forEach(({ user1, user2 }) => {
            const u = parseInt(user1) - 1;
            const v = parseInt(user2) - 1;
            if (u >= 0 && v >= 0 && u < n && v < n && u !== v) {
                newGraph[u][v] = 1;
                newGraph[v][u] = 1;
            }
        });
        setGraph(newGraph);
    };

    const handleFindShortestPath = () => {
        const { dist, next } = floydWarshall(graph, n);
        const path = getPath(next, source - 1, destination - 1);
        const distance = dist[source - 1][destination - 1];
        setShortestPathInfo({ path, distance });
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Graph Visualization</h1>

            <label>Number of users (n): </label>
            <input type="number" value={n} onChange={handleUserInput} min="2" max="20" />

            <h2>Connections</h2>
            {connections.map((connection, index) => (
                <div key={index} style={{ margin: '5px' }}>
                    <input
                        type="number" name="user1" placeholder="User 1" value={connection.user1}
                        onChange={(e) => handleConnectionChange(index, e)} min="1" max={n}
                    />
                    <input
                        type="number" name="user2" placeholder="User 2" value={connection.user2}
                        onChange={(e) => handleConnectionChange(index, e)} min="1" max={n}
                    />
                </div>
            ))}
            <button onClick={handleAddConnection}>Add Connection</button>
            <button onClick={initializeGraph}>Initialize Graph</button>

            {/* Source and Destination Selection */}
            <div style={{ marginTop: '20px' }}>
                <label>Source User: </label>
                <input type="number" value={source} onChange={(e) => setSource(parseInt(e.target.value))} min="1" max={n} />
                <label> Destination User: </label>
                <input type="number" value={destination} onChange={(e) => setDestination(parseInt(e.target.value))} min="1" max={n} />
            </div>

            <button onClick={handleFindShortestPath}>Find Shortest Path</button>

{/* Display Shortest Path Information */ }
{
    shortestPathInfo && (
        <div style={{ marginTop: '20px' }}>
            <h2>Shortest Path Result:</h2>
            <p>Path: {shortestPathInfo.path.join(' → ')}</p>
            <p>Distance: {shortestPathInfo.distance}</p>
        </div>
    )
}
        </div >
    );
};

export default GraphVisualizer;
