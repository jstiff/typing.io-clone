const fs = require('fs');


let data;
let formatted;

try{
   data= fs.readFileSync('../sourceCode.txt', 'utf-8');
   formatted= data.split("");
   console.log(formatted[3]==='\s')
   //fs.writeFileSync('log.txt', formatted)
   formatted.forEach(i=>{
     //if(i==='\t'||'\s'){console.log('Tab found!')}
     if(i==='\n'){fs.appendFileSync('source.html', `<br />`)}
     fs.appendFileSync('source.html',`<span>${i}</span>`)})
}catch(err){
  console.log("Error occured while trying to read the file");
}









// for(let i =0; i<formatted.length; i++){
//   fs.writeFile('source.html',`<span>${formatted[i]}</span>` , err=> {
//     if(err){
//       console.error(err)
//       return
//     }
//   })
//
// }
