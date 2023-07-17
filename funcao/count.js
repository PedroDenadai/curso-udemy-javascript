
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++
    };
    
};

console.log(createCounter(1))
