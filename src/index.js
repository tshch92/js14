function mirror(x) {
    const xString = String(x);
    if (xString.length === 1 || xString.length === 0) {
        return x;
    }
    return xString[xString.length - 1] + mirror(xString.substr(0, xString.length - 1));
}

function palindrome(value, i = 0) {
    if (value === +mirror(value)) {
        return {
            result: value,
            steps: i,
        };
    }
    return palindrome(value + +mirror(value), i + 1);
}

try {
    console.log(palindrome(89));
} catch {
    console.log('can not find a palindrome? Stack overflow? IDK');
}
