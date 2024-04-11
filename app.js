let reqFile = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';



let validRes = JSON.parse(reqFile);

console.log(validRes.fact);