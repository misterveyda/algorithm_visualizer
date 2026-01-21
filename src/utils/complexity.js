export function getComplexity(algorithm) {
    const complexities = {
        bubbleSort: "O(n²)",
        quickSort: "O(n log n)",
        bfs: "O(V + E)"
    };
    return complexities[algorithm];
}
