let numbers = [14,9,19,2,33,74,99,12, 82,14,2];

const insertionSort = () => {
    for (let i = 1; i < numbers.length; i++) {
        let key = numbers[i];
        let j = i - 1;

        // Moving elements of numbers[0..i-1], that are  
        // greater than key, to one position ahead  
        while (j >= 0 && numbers[j] > key) {
            numbers[j + 1] = numbers[j];
            j = j - 1;
        }

        numbers[j + 1] = key;
    }
    return numbers
}

// Now we try it
console.log("Before selection Sort ", numbers);
console.log("Sorted ", insertionSort(numbers));