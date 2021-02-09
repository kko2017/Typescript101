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