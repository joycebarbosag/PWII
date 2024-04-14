//questão 1
function recToN(n) {
    if (n === 1) {
        return 1;
    }
    return n + recToN(n - 1);
}

//questão 2
function divRecToN(n) {
    if (n === 1) {
        return 1;
    }
    return 1/n + divRecToN(n - 1);
}

//questão 3
function powRec(x, k) {
    if (k === 0) {
        return 1;
    }
    return x * powRec(x, k - 1);
}

//questão 4
function tribonacci(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1 || n === 2) {
        return 1;
    }
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

//questão 5
function pell(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return 2 * pell(n - 1) + pell(n - 2);
}