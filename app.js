// let reqFile = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';



// let validRes = JSON.parse(reqFile);

// console.log(validRes.fact);

// let team = {
//     cricket: "Playhard",
//     total: 123

// };
let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
    console.log(res);
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
});