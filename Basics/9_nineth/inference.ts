// type inference
// Generally data type is infered by TypeScript server.
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<T> {
    description: string;
    tag: K;
}

// let shoppingList: Dropdown<string> = {
//     value: 'Book',
//     title: 'Graphics'
// };

let shoppingItem: DetailedDropdown<string> = {
    value: 'good',
    title: 'food',
    description: 'This is food',
    tag: 'F'
};