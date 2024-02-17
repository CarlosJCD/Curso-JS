const MAX_ITERATIONS = 100;


for(let number = 0; number<MAX_ITERATIONS; number++){
    let message = "";

    if(number % 3 === 0) message+="fizz";
    if(number % 5 === 0) message+="buzz";

    console.log(`${number}: ${message}`);
}