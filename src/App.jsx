import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Form, ListGroup, Alert, Row, Col } from 'react-bootstrap';

function App() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState('');
  const [connections, setConnections] = useState([]);
  const [user1, setUser1] = useState('');
  const [user2, setUser2] = useState('');
  const [result, setResult] = useState(null);

  // Fetch users from backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Handle add user form submit
  const handleAddUser = () => {
    if (!userName) return;

    axios.post('http://localhost:5000/api/users', {
      name: userName,
      connections: connections,
    })
      .then(response => {
        setUsers([...users, response.data]);
        setUserName('');
        setConnections([]);
      })
      .catch(err => console.error(err));
  };

  // Handle find path
  const handleFindPath = () => {
    if (!user1 || !user2) return;

    axios.get(`http://localhost:5000/api/path/${user1}/${user2}`)
      .then(response => {
        if (response.data.degreesOfSeparation !== undefined) {
          setResult(`Degrees of Separation: ${response.data.degreesOfSeparation}`);
        } else {
          setResult(response.data.message);
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <Container>
      <h1 className="my-4">Social Network Shortest Path Finder</h1>

      <Row className="mb-4">
        <Col md={6}>
          <h2>Add User</h2>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={userName}
                onChange={e => setUserName(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Connections (comma separated user IDs)</Form.Label>
              <Form.Control
                type="text"
                value={connections.join(',')}
                onChange={e => setConnections(e.target.value.split(',').map(id => id.trim()))}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleAddUser}>Add User</Button>
          </Form>
        </Col>
      </Row>

      <h2>Users</h2>
      <ListGroup>
        {users.map(user => (
          <ListGroup.Item key={user._id}>
            {user.name} (ID: {user._id})
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Row className="mt-4">
        <Col md={6}>
          <h2>Find Shortest Path</h2>
          <Form>
            <Form.Group>
              <Form.Label>User 1 (ID)</Form.Label>
              <Form.Control
                type="text"
                value={user1}
                onChange={e => setUser1(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>User 2 (ID)</Form.Label>
              <Form.Control
                type="text"
                value={user2}
                onChange={e => setUser2(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleFindPath}>Find Path</Button>
          </Form>
        </Col>
      </Row>

      {result && (
        <Alert variant="info" className="mt-4">
          {result}
        </Alert>
      )}
    </Container>
  );
}

export default App;
