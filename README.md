# Why?
Need to determine if a nested property exists with a value (see caveats listed below).

# Other solutions exist
Why make this when many other solutions are out there? 
- Solutions have been proposed along with benchmarks of performace for each...
  - [Stack Overflow](https://stackoverflow.com/questions/2631001/javascript-test-for-existence-of-nested-object-key)

# What makes this different?
I do not believe this is by any means the best solution but...
- All code is documented
- Has tests to ensure it handles your expected behavior (Look at `./bin/test`)
  - If a property exists but has a value of...
    - undefined - method will return `false`.
    - empty array - method will return `true`.
    - number 0 - method will return `false`.
    - ...and many more so please look at the tests (`./bin/test`)
- Uses a for loop instead of recursion.
  - [Stack Exchange](https://softwareengineering.stackexchange.com/questions/179863/performance-recursion-vs-iteration-in-javascript)
- Is meant to be copy and pasted into your project and not installed through npm

# Versions
Identical except that `compatibility` will work without new language features.
- Latest (`./lib/objHas.js`)
  - Uses `const` and `let`
  - Uses `rest` parameters
  - Uses `arrow` functions
- Compatiblity (`./lib/.objHas.js`)
  - Uses `var`
  - Uses `Array.prototype.slice` on arguments
  - Uses `function`

# Run Tests (latest version)
```$ make```

# Run Tests (compatiblity version)
```$ make test```
