/* // FloydWarshall.js

export function floydWarshall(graph, n, setGraph) {
    let newGraph = JSON.parse(JSON.stringify(graph));  // Clone the graph to avoid mutating directly

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (newGraph[i][k] !== Infinity && newGraph[k][j] !== Infinity) {
                    newGraph[i][j] = Math.min(newGraph[i][j], newGraph[i][k] + newGraph[k][j]);
                }
            }
        }
        setGraph(newGraph); // Update the graph after each k iteration to visualize the progress
    }

    return newGraph;
}
 */

// floydWarshall.js
/* export function floydWarshall(graph, n) {
    const dist = graph.map(row => row.slice()); // Copy the graph to avoid mutations

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] !== Infinity && dist[k][j] !== Infinity) {
                    dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                }
            }
        }
    }

    return dist; // Return the updated graph
} */
export const floydWarshall = (graph, n) => {
    const dist = [...graph].map(row => [...row]);
    const next = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (dist[i][j] !== Infinity ? j : null))
    );

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    next[i][j] = next[i][k];
                }
            }
        }
    }

    return { dist, next };
};

export const getPath = (next, u, v) => {
    if (next[u][v] === null) return [];
    const path = [u];
    while (u !== v) {
        u = next[u][v];
        path.push(u);
    }
    return path.map(node => node + 1);  // Convert to 1-based index
};
