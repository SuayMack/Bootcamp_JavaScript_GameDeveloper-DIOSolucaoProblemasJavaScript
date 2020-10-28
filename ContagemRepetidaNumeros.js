let line = parseInt(gets());
let numeros = {};
let x;
for (let i = 0; i < line; i++) {
    x = gets();
    if(typeof numeros[x] === 'undefined')
        numeros[x] = {valor: parseInt(x), count:  1};
    else
        numeros[x].count++;
}
//console.log(numeros);

for(var [key, n] of Object.entries(numeros)){
    console.log(`${n.valor} aparece ${n.count} vez(es)`);
}