export function bubbleSort(arr) {
    let steps = [];
    let a = [...arr];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                steps.push([...a]);
            }
        }
    }
    return steps;
}

export function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[0];
    let left = arr.slice(1).filter(x => x < pivot);
    let right = arr.slice(1).filter(x => x >= pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}
