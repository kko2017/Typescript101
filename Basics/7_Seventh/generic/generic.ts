// Generic is a template of datatype, it is unknown type unless it is instantiated and decalres type.
function smsText<T>(text: T): T {
    console.log(text);
    return text;
}

smsText<string>('Hi~~~');