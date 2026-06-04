import { taxCalculation, type Product } from "./06";

const shoppngCart: Product[] = [
  { description: 'Nokia A1', price: 150 },
  { description: 'iPad Air', price: 350 },
];

const [ total, tax ] = taxCalculation({
  products: shoppngCart,
  tax: 0.15,
}); 

console.log('Total: ', total);
console.log('Tax: ', tax);