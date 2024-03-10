function bubble_sort(arr) {
    const n = arr.length;
    // Проходим по всем элементам массива
    for (let i = 0; i < n; i++) {
        // Установим флаг, который будет служить индикатором, были ли какие-либо обмены в этой итерации
        let swapped = false;
        // Проходим по массиву сравнивая каждую пару соседних элементов
        // и меняем их местами, если они находятся в неправильном порядке
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Обмен значениями
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }
        // Если в этой итерации не было ни одного обмена, то массив уже отсортирован
        if (!swapped) {
            break;
        }
    }
}
