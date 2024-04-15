let numbers = [14,9,19,2,33,74,99,12, 82,14,2];

const selectionSort = (numbers) =>{
    for (let i = 0; i < numbers.length-1; i++){

        // Finding the minimum element
        let minIndex = i;
        for (let j = i + 1; j < numbers.length; j++){
            if (numbers[j] < numbers[minIndex]) minIndex = j; // End  if
        } // end for j
 
        // Swapping the minimum element with the first element
        let temp = numbers[minIndex];
        numbers[minIndex] = numbers[i];
        numbers[i] = temp;
    } // end for i

    return numbers;
}

// Now we try it
console.log("Before selection Sort ", numbers);
console.log("Sorted ", selectionSort(numbers));