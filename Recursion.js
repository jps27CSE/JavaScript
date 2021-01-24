function Sum(n) {
    if (n === 0) {
        return 0;
    }

    else {
        return Sum(n - 1) + n;
    }
}

console.log(Sum(3))