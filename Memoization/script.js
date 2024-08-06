function memoize(func) {
    const cache = {}; // Cache to store previous results
    return function(...args) {
      const key = JSON.stringify(args); // Create a unique key for the function arguments
      if (!cache[key]) { // If the result is not in the cache
        cache[key] = func.apply(this, args); // Calculate the result and store it in the cache
      }
      return cache[key]; // Return the cached result
    };
  }
  
  // Example function to calculate Fibonacci numbers (recursive)
  const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  });
  
  console.log(fibonacci(10)); // Output: 55 (result cached)
  console.log(fibonacci(15)); // Output: 610 (result cached)
  