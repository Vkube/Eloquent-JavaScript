// Напишите программу, которая создает строку, представляющую сетку 8 х 8,
// используя для разделения строк символы новой строки. В каждой позиции
// сетки стоит либо пробел, либо символ"#".
// Эти символы должны располагаться в шахматном порядке.

let size: number = 8;
let symbol: string = "";

for (let y: number = 0; y < size; y++) {
  for (let x: number = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      symbol += " ";
    } else {
      symbol += "#";
    }
  }
  symbol += "\n";
}

console.log(symbol);
