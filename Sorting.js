function sortDescending(arr) {
    arr.sort(function(a, b) {
        // Compare b to a for descending order
        return b - a;
    });
}

const numbers = [5, 1, 9, 3, 7];

console.log('Before Sorting :', numbers);

// Call the sortDescending function
sortDescending(numbers);

// Output the sorted array
console.log('Sorted in descending order:', numbers);
