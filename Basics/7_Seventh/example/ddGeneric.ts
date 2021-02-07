interface Item<T, S>{
    value: T;
    selected: S;
}

const emails: Item<string, boolean>[] = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];

const numberOfProducts: Item<number, boolean>[] = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];

function createDropdownItem<T>(item: Item<T, boolean>) {
    const option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}

// NOTE: add drop down options in emails
emails.forEach(function (email: Item<string, boolean>) {
    const item = createDropdownItem<string>(email);
    const selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});

// NOTE: add drop down options in products
numberOfProducts.forEach(function (product: Item<number, boolean>) {
    const item = createDropdownItem<number>(product);
    const selectTag = document.querySelector('#product-dropdown');
    selectTag.appendChild(item);
});