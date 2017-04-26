
const fs = require('fs');

let x = fs.readFileSync('dataChange.json', 'utf8')

const y = JSON.parse(x)

let n = []
y.forEach((tale)=> {
	tale.stars = 5
	tale.id = parseInt(tale.id) + 200
	n.push(tale)
})

console.log(JSON.stringify(n));
fs.writeFileSync('output.json', n, 'utf8')
console.log('done')
