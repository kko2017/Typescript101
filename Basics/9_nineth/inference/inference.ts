// type inference
// Generally data type is infered by TypeScript server.
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
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

/**
 * Best Common Type. ponit the cursor on arr.
 */
let arr = [1, 2, null, true, false, 'abc'];