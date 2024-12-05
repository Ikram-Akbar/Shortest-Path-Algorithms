/* import  { useState } from 'react';
import { floydWarshall } from './FloydWarshall'; // Ensure this function handles matrix updates

const GraphVisualizer = () => {
    const [n, setN] = useState(5);  // Number of users (nodes)
    const [connections, setConnections] = useState([{ user1: '', user2: '' }]);
    const [graph, setGraph] = useState(createEmptyGraph(5)); // Initial 5x5 graph

    // Create an empty adjacency matrix
    function createEmptyGraph(size) {
        const matrix = Array(size).fill().map(() => Array(size).fill(Infinity));
        for (let i = 0; i < size; i++) matrix[i][i] = 0;  // Self-connections (0)
        return matrix;
    }

    // Handle user count change and reset the graph
    const handleUserInput = (e) => {
        const size = parseInt(e.target.value);
        setN(size);
        setGraph(createEmptyGraph(size));
        setConnections([{ user1: '', user2: '' }]);  // Reset connections
    };

    // Handle connection updates
    const handleConnectionChange = (index, e) => {
        const updatedConnections = [...connections];
        updatedConnections[index][e.target.name] = e.target.value;
        setConnections(updatedConnections);
    };

    // Add a new connection row
    const handleAddConnection = () => {
        setConnections([...connections, { user1: '', user2: '' }]);
    };

    // Initialize graph with user-defined connections
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

    // Run Floyd-Warshall and update the graph
    const handleFindShortestPath = () => {
        const updatedGraph = floydWarshall(graph, n); // Call and store the result
        setGraph(updatedGraph); // Update the state with the result
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
            <button onClick={handleFindShortestPath}>Find Shortest Paths</button>

            <table border="1" style={{ margin: '20px auto', textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>User</th>
                        {Array.from({ length: n }, (_, idx) => <th key={idx}>{`U${idx + 1}`}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {graph.map((row, i) => (
                        <tr key={i}>
                            <td>{`U${i + 1}`}</td>
                            {row.map((cell, j) => (
                                <td key={j} style={{ padding: '8px', backgroundColor: cell === Infinity ? '#fdd' : '#dfd' }}>
                                    {cell === Infinity ? '∞' : cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GraphVisualizer; */
