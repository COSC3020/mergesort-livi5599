function mergesort(array) {
    if (array.length == 0)
        return array;
    if (array.length == 1)
        return array[0];

    for (width = 1; width < array.length; width *= 2) {
        for (i = 0; i < array.length; i += 2 * width) {
            console.log("i = ", i);
            var low = i;
            var mid = i + width;
            var high = i + 2 * width;

            if (mid > array.length) {
                console.log("Breaking out of for loop");
                break;
            }

            if (high > array.length) {
                high = array.length;
            }

            merge(array, low, mid, high);
        }
    }

    return array;
}
