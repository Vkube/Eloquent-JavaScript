function countChar(word, letter) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) == letter) {
            count++;
        }
    }
    return count;
}
function countBs(string) {
    return countChar(string, "B");
}
var result = countBs('Bdcd');
console.log(result);
