let numbers = [14,9,19,2,33,74,99,12, 82,14,2];

const bubbleSort = (numbers) =>{
    for( let i = 0; i < numbers.length -1; i++){
        let swap = false;
        for(let j = 0; j < numbers.length - i - 1; j++){
            // We swap the elements
            if ( numbers[j] > numbers[j+1]){
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1] = temp;
                swap = true;
            } // End if swap

        } // End for j
        // If no elements are swaped, then the array is sorted and we break out.
        if(!swap)break;
    } // End for i
    return numbers;
}

// Now we try it
console.log("Before bubble Sort ", numbers);
console.log("Sorted ", bubbleSort(numbers));