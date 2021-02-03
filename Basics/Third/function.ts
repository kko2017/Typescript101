function multiply(a: number, b: number): number {
    return a * b;
}

multiply(2, 7);

function result(): number {
    return 10;
}

result();

// Optional parameter
function hello(a: string, b?: boolean) {
    if (b) {
        return `Hi~ I am ${a}.`;        
    } else {
        return 'Sorry, sir.';
    }
}

hello('Johnny');
hello('Sarah', true);
