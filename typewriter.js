const sentence = "hello there from lighthouse labs ";

let newLine = sentence + '\n';
let timer = 0
for( let char of newLine) {
  setTimeout(() => {
    process.stdout.write(char);
  },  timer);
  timer = timer + 100
};