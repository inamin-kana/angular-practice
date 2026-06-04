export interface Passenger {
  name: string;
  children?: string[];
}

const passanger1: Passenger = {
  name: 'Kanako',
};

const passanger2: Passenger = {
  name: 'Junko',
  children: ['Moriyoshi', 'Keisuke'],
};

const printChildren = (passenger: Passenger): number => {

  // if (!passenger.children) return 0;

  const howManyChildren = passenger.children?.length || 0;
  // const howManyChildren = passenger.children!.length;
  
  console.log(passenger.name, howManyChildren);

  return howManyChildren;
}

printChildren( passanger2 );