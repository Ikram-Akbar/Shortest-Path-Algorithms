/* import { useState } from 'react';
import { floydWarshall } from './FloydWarshall'; // Floyd-Warshall algorithm
import { Col, Container, Row } from 'react-bootstrap';

const GraphVisualizer = () => {
    // State variables to store the graph, number of users, and connections
    const [n, setN] = useState(5);  // Number of users (nodes)
    const [m, setM] = useState(4);  // Number of connections (edges)
    const [graph, setGraph] = useState(Array(n).fill().map(() => Array(n).fill(Infinity)));
    const [connections, setConnections] = useState([]);
    const [user1, setUser1] = useState(0);
    const [user2, setUser2] = useState(1);

    // Handle input for number of users
    const handleUserInput = (e) => {
        setN(e.target.value);
    };

    // Handle input for number of connections
    const handleConnectionsInput = (e) => {
        setM(e.target.value);
    };

    // Add a new connection
    const handleAddConnection = () => {
        setConnections([...connections, { user1: '', user2: '' }]);
    };

    // Update connection values
    const handleConnectionChange = (index, e) => {
        const updatedConnections = [...connections];
        updatedConnections[index][e.target.name] = e.target.value;
        setConnections(updatedConnections);
    };

    // Initialize graph with connections
    const initializeGraph = () => {
        const newGraph = Array(n).fill().map(() => Array(n).fill(Infinity));
        for (let i = 0; i < n; i++) {
            newGraph[i][i] = 0;  // A user is always connected to themselves
        }

        // Create edges based on user input for connections
        connections.forEach(({ user1, user2 }) => {
            if (user1 !== '' && user2 !== '') {
                newGraph[user1 - 1][user2 - 1] = 1;
                newGraph[user2 - 1][user1 - 1] = 1;
            }
        });

        setGraph(newGraph);
    };

    // Run Floyd-Warshall Algorithm
    const handleFindShortestPath = () => {
        floydWarshall(graph, n, setGraph);
    };

    return (
        <Container className='px-5'>
            <Row>
                <Col className='text-center bg-success'>
                    <h1 className='text-center fw-bold fs-1'>Graph Visualization</h1>

                    <div>
                        <label>Enter number of users (n): </label>
                        <input
                            type="number"
                            value={n}
                            onChange={handleUserInput}
                            min="2"
                        />
                    </div>

                    <div>
                        <label>Enter number of connections (m): </label>
                        <input
                            type="number"
                            value={m}
                            onChange={handleConnectionsInput}
                            min="1"
                        />
                    </div>

                    <div>
                        <h2>Connections between users</h2>
                        {connections.map((connection, index) => (
                            <div key={index}>
                                <input
                                    type="number"
                                    name="user1"
                                    placeholder="User 1"
                                    value={connection.user1}
                                    onChange={(e) => handleConnectionChange(index, e)}
                                    min="1"
                                    max={n}
                                />
                                <input
                                    type="number"
                                    name="user2"
                                    placeholder="User 2"
                                    value={connection.user2}
                                    onChange={(e) => handleConnectionChange(index, e)}
                                    min="1"
                                    max={n}
                                />
                            </div>
                        ))}
                        <button onClick={handleAddConnection}>Add Connection</button>
                    </div>

                    <button onClick={initializeGraph}>Initialize Graph</button>
                    <button onClick={handleFindShortestPath}>Find Shortest Paths</button>

                    <table>
                        <thead>
                            <tr>
                                {Array.from({ length: n }).map((_, idx) => (
                                    <th key={idx}> User {idx + 1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {graph.map((row, i) => (
                                <tr key={i}>
                                    {row.map((cell, j) => (
                                        <td key={j} style={{ padding: '5px', textAlign: 'center' }}>
                                            {cell === Infinity ? '∞' : cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div>
                        <h2>Shortest Path Query</h2>
                        <input
                            type="number"
                            value={user1 + 1}
                            onChange={(e) => setUser1(parseInt(e.target.value) - 1)}
                            min={1}
                            max={n}
                        />
                        <input
                            type="number"
                            value={user2 + 1}
                            onChange={(e) => setUser2(parseInt(e.target.value) - 1)}
                            min={1}
                            max={n}
                        />
                        <p>
                            Shortest path between User {user1 + 1} and User {user2 + 1}:
                            {graph[user1][user2] === Infinity ? 'No path' : graph[user1][user2]}
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default GraphVisualizer;
 */








