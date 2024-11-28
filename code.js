function mergesort(array) {
    if (array.length == 0)
        return 0;
    if (array.length == 1)
        return array[0];

    for (width = 1; width < array.length; width *= 2) {
        for (i = 0; i < array.length; i += 2 * width) {
            var low = i;
            var high = 2 * width;
            var mid = Math.floor((high - low) / 2);
            for (j = low; j <= mid; j++) {
                for (k = high; k >= mid; k--) {
                    if (array[k] < array[j]) {
                        [array[j], array[k]] = [array[k], array[j]];
                    }
                }
            }
        }
    }
    return array;
}
