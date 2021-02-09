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