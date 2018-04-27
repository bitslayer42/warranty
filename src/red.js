
let x = [[0,1,2,0],[10,11,12,0]];

x = x.reduce((acc,eachrow)=>{
    eachrow[3] = eachrow[1];
    acc.push(eachrow);
    return acc;
},[]);
console.log(x);