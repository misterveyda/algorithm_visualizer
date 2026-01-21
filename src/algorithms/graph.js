export function bfs(graph, start) {
    let visited = [];
    let queue = [start];

    while (queue.length) {
        let node = queue.shift();
        if (!visited.includes(node)) {
            visited.push(node);
            queue.push(...graph[node]);
        }
    }
    return visited;
}
