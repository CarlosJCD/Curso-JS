moment.locale('es');

console.log(moment().format("MMM Do YYY h:mm:ss"));

console.log(moment().add(3,"days").calendar());