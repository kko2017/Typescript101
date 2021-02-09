// Pick utility
interface Product {
    id: number;
    name: string;
    price: number;
    checked: boolean;
    quantity: number;
}

function myShoppingItem(item: Pick<Product, 'id' | 'name' | 'price'>): void {
    //...
}

// Omit utility
let myProduct: Omit<Product, 'checked' | 'quantity'> = {
    id: 1,
    name: 'food',
    price: 500
};


// Partial utility => propoerties in interface became optional
// 아래 타입을 옵셔널을 보기 쉽게 하기 위한 예
type UpdateProduct = Partial<Product>;

let updateProduct: Partial<Product> = {
    quantity: 5,
};


// How to create the structure of partial utility
interface Software {
    name: string;
    description: string;
    serialnumber: number;
}

// #1 how to update some properties in the software
type UpdateSoftware1 = {
    name?: Software['name'];
    description?: Software['description'];
    serialnumber?: Software['serialnumber'];
}

// #2
type UpdateSoftware2 = {
    [p in 'name' | 'description' | 'serialnumber']?: Software[p];
}

// #3
type UpdateSoftware3 = {
    [p in keyof Software]?: Software[p];
}

// #4 This is the structure of partial utility.
type UpdateSoftware4<T> = {
    [p in keyof T]?: T[p];
}