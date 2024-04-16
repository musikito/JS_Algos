<img style="float: center;" src="/images/sorting-algos.jpeg">

# Sort arrays with and without in-built functions
Problem Statement
We are given an array of numbers and we need to arrange them in ascending order i.e., a smaller number followed by a higher number.

Sample Examples
Example

Input

Array [0,3,5,2,4,1]

Output
Array [0,1,2,3,4,5]

 
Explanation: The sorted array in the ascending order would be: 0, 1, 2, 3, 4, 5

**We will use the built in function sort().**
## sort.js
### Aproach
1.- Declare the array. <br/>
2.- Call the array.sort() function. <br/>
3.- Print the result to the console. <br/>


**Implementation without the sort() function.**
# [Bubble sort](https://en.wikipedia.org/wiki/Bubble_sort)
<img style="float: center;" src="/images/bubble-sort.png">

### Aproach (Pseudo code)
    arr = [numbers]
    bubbleSort(arr)
        for loop arr.size()
            if arr[index loop] > arr[index + 1]
                swap(arr[index],arr[index+1])
            end if
        end for
    return arr      

# [Selection sort](https://en.wikipedia.org/wiki/Selection_sort)

### Aproach (Pseudo code)
    arr = [numbers]
    selectionSort(arr)
        for loop i
            for loop j
                check for minIndex
            swap elements
    return arr

# [Insertion sort](https://en.wikipedia.org/wiki/Insertion_sort)

### Aproach (Pseudo code)
        arr = [numbers]
        insertionSort(arr)
            for loop to arr.length
            key <- arr[i]
            j <- i - 1

            while loop j >=0 and arr[j] < key:
                arr[j+1] <- arr[j]
                j = j+1
            end while loop
            arr[j+1]<-key
            end for loop

            return arr
    
