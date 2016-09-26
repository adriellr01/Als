// Synchronous
const fs = require('fs')  
let content  
try {  
  content = fs.readFileSync('file.md', 'utf-8')
} catch (ex) {
  console.log(ex)
}
console.log(content)

// Asynchronous
const fs = require('fs')  
fs.readFile('file.md', 'utf-8', function (err, content) {  
  if (err) {
    return console.log(err)
  }

  console.log(content)
})