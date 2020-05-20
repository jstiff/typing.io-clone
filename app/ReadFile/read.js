const fs = require("fs");

let text;
let characters;

try {
  let charArray = [];
  text = fs.readFileSync("../sourceCode.txt", "utf-8");
  characters = text.split("");
  console.log(characters[0]);
  //fs.writeFileSync('log.txt', characters)
  characters.forEach((i) => {
    //if(i==='\t'||'\s'){console.log('Tab found!')}
    if (i === "\n") {
      fs.appendFileSync("source.html", `<span class="return"><br /></span>`);
    } else if (i === " ") {
      fs.appendFileSync("source.html", `<span>${" "}</span>`);
    } else {
      fs.appendFileSync("source.html", `<span>${i}</span>`);
    }
  });
} catch (err) {
  console.log("Error occured while trying to read the file", err);
}

// for(let i =0; i<characters.length; i++){
//   fs.writeFile('source.html',`<span>${characters[i]}</span>` , err=> {
//     if(err){
//       console.error(err)
//       return
//     }
//   })
//
// }
