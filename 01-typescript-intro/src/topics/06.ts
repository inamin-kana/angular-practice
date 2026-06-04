export interface Product {
  description : string;
  price : number;
}

const phone: Product = {
  description: 'Nokia A1',
  price: 150,
};

const tablet: Product = {
  description: 'iPad Air',
  price: 350,
};

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

export const taxCalculation = ( options: TaxCalculationOptions ): [number, number] => {
  let total = 0;
  const {tax, products} = options;

  products.forEach( ({price})  => {
    total += price;
  })
  
  return [total, total * tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const [ total, taxTotal] = taxCalculation({
  products: shopingCart,
  tax: tax,
})

console.log('Total: ', total);
console.log('Tax: ', taxTotal);

export {};