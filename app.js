// let reqFile = '{"fact":"A cat will tremble or shiver when it is extreme pain.","length":53}';



// let validRes = JSON.parse(reqFile);

// console.log(validRes.fact);

// let team = {
//     cricket: "Playhard",
//     total: 123

// };
//  let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2", data2.fact);
// })
// .catch((err)=>{
//     console.log(err);
// });

 let url = "https://catfact.ninja/fact";


 async function getFact() {
    try{
        let res = await axios.get(url);
        console.log(res.data);
    } catch(e) {
        console.log(e);
    }
 }
 
