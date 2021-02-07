// Generic is a template of datatype, it is unknown type unless it is instantiated and decalres type.
// function smsText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// smsText<string>('Hi~~~');

// If you use union type, you can't use built-in only string or number method.
// You can only use same methods in both string, number.
// That's why we need to use Generic.
function smsText(text: string | number) {
    console.log(text);
    return text;
}

let send = smsText('hi');
send.split('').reverse().join();


// Generic Interface
interface Clock<T>{
    name: T;
    selected: boolean;
}

let rolex: Clock<string> = {
    name: 'Rolex',
    selected: true
};