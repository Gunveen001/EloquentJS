let n = 8;
let newf = '';
for (let i=  0; i<n; i++){
    for(let y=0; y<n; y++){
      if ((i+y) % 2 === 0)  newf += ' ';
      else newf += '#';
    }
    newf += '\n';
}
console.log(newf);