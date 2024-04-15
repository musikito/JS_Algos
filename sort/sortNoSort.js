let numbers = [14,9,19,2,33,74,99,12, 82,14,2];


// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[i] < numbers[j]) {
//             const temp = numbers[j];
//             numbers[j] = numbers[i];
//             numbers[i] = temp;
//         }
//     }
// }
console.log("sorted ", numbers);

for (let i = 0; i < numbers.length - 1; i++){
    // console.log('index of ', i);
    for(let j = i + 1;j < numbers.length ; j++){
       //  console.log("j index of ", j);
        if(numbers[i] > numbers[j]){
            // Change the > sign for reverse sort
            // Use a temp var to do the swap
            const tempVar = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tempVar;
        } // End of if for swaping the values
    } // End of second for(j)

} // End of first for (i)

console.log("sorted: ", numbers);


