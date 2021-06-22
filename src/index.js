function mirror(x) {
    x = String(x);
    if ( x.length === 1 || x.length === 0) {
        return x;
    };
    return x[x.length - 1] + mirror(x.substr(0, x.length-1));
}

function palindrome(value, i) {
    if (i === undefined) {
        i=0
    };
    if (value == mirror(value)) {
        return {
            result: value,
            steps: i,
        }
    }
    return palindrome(value + +mirror(value), i+1);
}

try {
    console.log(palindrome(89))
} catch {
    console.log('can not find a palindrome? Stack overflow? IDK')
}