export interface Passanger {
  name: string;
  children?: string[];
}

const passanger1: Passanger = {
  name: 'Kanako',
};

const passanger2: Passanger = {
  name: 'Noriko',
  children: ['AAA', 'BBB'],
};

const printChuldren = ( passanger: Passanger ) => {
  const howManyChildren = passanger.children?.length || 0;
  console.log(passanger.name, howManyChildren);
}

printChuldren( passanger1 );
printChuldren( passanger2 );