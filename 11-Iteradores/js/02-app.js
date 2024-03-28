let number = 8;

for (let i = 0; i < number; i++) {;
    if(i % 2 === 0) console.log("Numero Par")

    if(i % 2 !== 0) continue;

    if(i % 2 === 0 && i % 4 === 0) break;
}