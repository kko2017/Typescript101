var emails = [
    { value: 'naver.com', selected: true },
    { value: 'gmail.com', selected: false },
    { value: 'hanmail.net', selected: false },
];
var numberOfProducts = [
    { value: 1, selected: true },
    { value: 2, selected: false },
    { value: 3, selected: false },
];
function createDropdownItem(item) {
    var option = document.createElement('option');
    option.value = item.value.toString();
    option.innerText = item.value.toString();
    option.selected = item.selected;
    return option;
}
// NOTE: add drop down options in emails
emails.forEach(function (email) {
    var item = createDropdownItem(email);
    var selectTag = document.querySelector('#email-dropdown');
    selectTag.appendChild(item);
});
// NOTE: add drop down options in products
numberOfProducts.forEach(function (product) {
    var item = createDropdownItem(product);
    var selectTag = document.querySelector('#product-dropdown');
    selectTag.appendChild(item);
});
