const colors = require('colors');

export function logMulLine(data: string[], column: number): void {
  const dataSlice = [];
  for (let i = 0; i < data.length; i += column) {
    dataSlice.push(data.slice(i, i + column));
  }
  for (let i = 0; i < dataSlice.length; i++) {
    let outputString = dataSlice[i].join('     ');
    console.log(colors.brightBlue(outputString))
  }
}

