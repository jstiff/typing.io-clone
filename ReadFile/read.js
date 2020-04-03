const fs = require('fs');

//let data= fs.readFileSync('../sourceCode.txt', 'utf-8');
//let formatted= data.split("");
var data;
var formatted;

try{
   data= fs.readFileSync('../sourceCode.txt', 'utf-8');
   formatted= data.split("");
   //console.log(formatted);
   formatted.forEach(i=>{
     if(i==='\n'){fs.appendFileSync('source.html', `<br />`)}
     fs.appendFileSync('source.html',`<span>${i}</span>`)})
}catch(err){
  console.log("Error occured while trying to read the file");
}



// try{
//   fs.writeFileSync('source.html', formatted)
// }catch(err){
//   console.log("error occured while writing to file");
// }





// for(let i =0; i<formatted.length; i++){
//   fs.writeFile('source.html',`<span>${formatted[i]}</span>` , err=> {
//     if(err){
//       console.error(err)
//       return
//     }
//   })
//
// }

//console.log(poop);
//formatted.forEach((i) =>{
  //fs.writeFileSync('TypingIo/source.html', i , err => {
  //  if(err){
  //    console.error(err)
  //    return
  //  }
  //})
//})
