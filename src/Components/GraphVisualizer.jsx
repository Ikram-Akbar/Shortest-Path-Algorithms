import { useState } from 'react';
import { floydWarshall } from './FloydWarshall'; // Ensure this function handles matrix updates
import { Container, Row, Col, Button, Form, Table, Alert } from 'react-bootstrap';

const GraphVisualizer = () => {
    const [n, setN] = useState(5);  // Number of users (nodes)
    const [connections, setConnections] = useState([{ user1: '', user2: '' }]);
    const [graph, setGraph] = useState(createEmptyGraph(5)); // Initial 5x5 graph
    const [shortestPathInfo, setShortestPathInfo] = useState(null); // State for shortest path info
    const [user1, setUser1] = useState('');  // State for User 1
    const [user2, setUser2] = useState('');  // State for User 2

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
        if (user1 === '' || user2 === '') {
            alert('Please select both User 1 and User 2');
            return;
        }

        const u1 = parseInt(user1) - 1;
        const u2 = parseInt(user2) - 1;

        initializeGraph(); // Ensure the graph is initialized with the connections
        const { dist, next } = floydWarshall(graph, n);
        const path = getPath(next, u1, u2); // Getting path from user1 to user2
        const distance = dist[u1][u2]; // Getting the shortest distance
        setShortestPathInfo({ path, distance });
    };

    // Function to retrieve the path based on 'next' matrix
    const getPath = (next, u, v) => {
        const path = [];
        if (next[u][v] === -1) return null; // No path
        while (u !== v) {
            path.push(u + 1); // Convert to 1-based index
            u = next[u][v];
        }
        path.push(v + 1); // Convert to 1-based index
        return path;
    };

    return (
        <Container className="my-4">
            <div >
                <h1 className="text-center mt-4">Shortest Path Finder</h1>
                <p className='text-muted text-center'>Algorithm: Floyd-Warshall</p>
            </div>

            <Row>
                <Col>
                    <Row className="mb-4">
                        <Col>
                            <Form.Label>Number of users (n): </Form.Label>
                            <Form.Control
                                type="number"
                                value={n}
                                onChange={handleUserInput}
                                min="2"
                                max="20"
                            />
                        </Col>
                    </Row>

                    <h2>Connections</h2>
                    {connections.map((connection, index) => (
                        <Row className="mb-3" key={index}>
                            <Col>
                                <Form.Control
                                    type="number"
                                    name="user1"
                                    placeholder="User 1"
                                    value={connection.user1}
                                    onChange={(e) => handleConnectionChange(index, e)}
                                    min="1"
                                    max={n}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    name="user2"
                                    placeholder="User 2"
                                    value={connection.user2}
                                    onChange={(e) => handleConnectionChange(index, e)}
                                    min="1"
                                    max={n}
                                />
                            </Col>
                        </Row>
                    ))}
                    <Row className="mb-3">
                        <Col>
                            <Button variant="primary" onClick={handleAddConnection}>Add Connection</Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" onClick={initializeGraph}>Initialize Graph</Button>
                        </Col>
                    </Row>

                    <Table bordered hover className="text-center my-4">
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
                                        <td
                                            key={j}
                                            style={{ padding: '8px', backgroundColor: cell === Infinity ? '#fdd' : '#dfd' }}
                                        >
                                            {cell === Infinity ? '∞' : cell}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </Table>

                   
                </Col>
                <Col>
                    {/* Input fields for user1 and user2 */}

                    <Row className="my-5">
                        <h6>Find the Shortest Path between User 1 and User 2</h6>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="User 1"
                                value={user1}
                                onChange={(e) => setUser1(e.target.value)}
                                min="1"
                                max={n}
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                type="number"
                                placeholder="User 2"
                                value={user2}
                                onChange={(e) => setUser2(e.target.value)}
                                min="1"
                                max={n}
                            />
                        </Col>

                        <div className='mt-3'>
                            <Button variant="primary" onClick={handleFindShortestPath}>Find Shortest Path</Button>

                            {shortestPathInfo && (
                                <Alert variant="info" className="mt-4">
                                    <h5>Shortest Path from User {user1} to User {user2}:</h5>
                                    <p>Path: {shortestPathInfo.path ? shortestPathInfo.path.join(' → ') : 'No path available'}</p>
                                    <p>Distance: {shortestPathInfo.distance === Infinity ? 'No path' : shortestPathInfo.distance}</p>
                                </Alert>
                            )}
                       </div>
                    </Row>

                   
                </Col>
           </Row>
        </Container>
    );
};

export default GraphVisualizer;
