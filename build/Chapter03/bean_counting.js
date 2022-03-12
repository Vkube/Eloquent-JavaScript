function countChar(word, letter) {
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
const result = countBs("Bdcd");
console.log(result);
module.exports = countBs();
module.exports = countChar();
