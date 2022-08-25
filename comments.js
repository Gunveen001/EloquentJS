function skipSpace(string) {
 let skipable = string.match(/^(\s|#.*)*/)
  return string.slice(skipable[0].length);
}

console.log(parse("# hello\nx"));
console.log(parse("a # one\n   # two\n()"));
