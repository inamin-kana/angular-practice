const skills: string[] = ['JavaScript','TypeScript','Angular'];

interface Character {
  name: string,
  age: number,
  skills: string[],
  hometown?: string,
}

const strider: Character = {
  name: 'Strider',
  age: 6,
  skills: ['Bash', 'Counter', 'Healing'],
};

strider.hometown = 'Tokyo';

console.table(strider);