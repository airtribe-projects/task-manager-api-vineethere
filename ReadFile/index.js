const fs = require('fs');
const filepath = './demo.txt'; // If your file has an extension, change this to './demo.txt'

console.time('AsyncFileRead');

// This function will handle the file contents when the background work finishes
const done = (err, data) => {
    if (err) {
        console.log("Error reading file:", err.message);
        return;
    }
    
    console.log("Data is processed");
    console.timeEnd('AsyncFileRead');
}

console.time('readFile');
// 2. CRITICAL: Changed to fs.readFile (Asynchronous) so it executes your callback
fs.readFile(filepath, 'utf-8', done); 
console.timeEnd('readFile');

// This executes instantly while the computer reads the file in the background
for (let i = 0; i < 5; i++) {
    console.log(i);
}