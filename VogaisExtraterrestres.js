let line = gets()

do {
let substring = line.split('');
let string = gets();
let count = 0;
substring.forEach(item => {

  let match = (string.match(new RegExp(item, "gs")) || []).length;
  count+= match
})

console.log(count);
line = gets();
} while( line != '');