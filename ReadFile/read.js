const fs = require('fs');

let data= fs.readFileSync('../sourceCode.txt', 'utf-8');
let formatted= data.split("");


for(let i =0; i<formatted.length; i++){
  fs.writeFile('source.html',`<span>${formatted[i]}</span>` , err=> {
    if(err){
      console.error(err)
      return
    }
  })

}

//console.log(poop);
//formatted.forEach((i) =>{
  //fs.writeFileSync('TypingIo/source.html', i , err => {
  //  if(err){
  //    console.error(err)
  //    return
  //  }
  //})
//})
