const b = new Buffer.from('abc');

console.log(b.toString());

b.write('other');

console.log(b.toString());