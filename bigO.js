//  1. What is the Big O for this?
//       1. O(1) constant time. The action is performed one time and you get a result.
//       2. 0(n) liner time. The action is performed once per attempt at finding a solution. If there are 10 people it could take 10 tries. If there are 100 people it could take 100 tries to get a result.

// 2. Even or odd
// O(1) constant time. The algorithm only has to perform each step once no matter the size of the input.

// 3. Are you here?
// Polynomial O(n^2). For every element in array1 you are checking every element in array2 compounding the operations

// 4. Doubler
// Linear O(n). You are only looping through the array once to perform an operation but looping through every element in the array.

// 5. Naive search
// Linear O(n). You only go through each item in the array once to check to see if it is the item you are looking for.

// 6. Creating Pairs
// Polynomial O(n^2). The function is concatinating (separated by ', ') each each value in the
// input array with each value in the array, meaning the time operation grows
// exponentially with input size.

// 7. Compute the sequence
// What does it do?
//It prints out the fibonacci sequence based on how high the number given was. ex: if num given is 7 prints the first 7 fibonacci numbers by adding the two numbers previous together.
// Complexity?
//Linear O(n). It will perform as many operations as given by the num argument.

// 8. An efficient search
// Logarithmic O(log(n)). This takes a sorted array and an item. It splits the array into two halves by picking the middle element. If that element is greater than the element we are seeking we can eliminate the upper half. If the current element is less than the element we are seeking we can eliminate the lower half. It does this and keeps splitting into smaller and smaller bits until the element we are looking for is found. Because we are eliminating large amounts of our data from our search, due to the knowledge the array is sorted, we know that the runtime is O(log(n))

// 9. Random element
// Constant O(1). It simply picks a random element and returns it no need to look at any of the other items.

// 10. What Am I?
//What does it do?
// It checks to see if the number given, n, is not a prime number.
//What is the complexity?
// Linear O(n). The number is the only scaling factor here. As it gets bigger there have to be more and more checks to see if there are any factors of said number. This continues until the number about to be checked, i, is greater than or equal to the number given, n.

tower_of_hanoi = (src, dest, temp, n) => {
  if (n <= 0) {
    return;
  }

  tower_of_hanoi(src, temp, dest, n - 1);

  console.log(`Move Disk-${n} FROM ${src} TO ${dest}`);

  tower_of_hanoi(temp, dest, src, n - 1);
};

tower_of_hanoi("src", "dest", "temp", 5);

// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// 3 disks = 7
// 4 disks = 15
// 5 disks = 31

// What is the runtime of your algorithm?
// O(2^n) Exponential time
