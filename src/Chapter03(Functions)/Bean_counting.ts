function countChar(word: string, letter: string): number {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word.charAt(i) == letter) {
      count++;
    }
  }
  return count;
}
function countBs(string) {
  return countChar(string, "B");
}
let result = countBs("Bdcd");
console.log(result);
