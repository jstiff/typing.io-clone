
const btnGitHub = document.getElementById("btn2");
const code = document.getElementsByClassName("mainContainer")[0];
btnGitHub.addEventListener("click", gitHubFetch);

async function gitHubFetch(){
	const url = "https://api.github.com/repos/substack/node-falafel/contents/index.js"
	const response = await fetch(url);
	const result = await response.json();
	console.log(result);
	const anchor = document.createElement("a");
	anchor.href= result.download_url;
	anchor.textContent = result.name;
	code.appendChild(anchor);

	code.appendChild(document.createElement("br"))

};


const spanChar = document.querySelector('span');
const characters = document.querySelectorAll('span');


console.log(characters.length);
characters.forEach(spanChar =>{
	console.log(spanChar.innerText)
})


let i = 0;
function keyHandler(eventData){
	const currentChar = characters[i]
	if(currentChar.innerText==eventData.key){
		i+=1;
		console.log("SUCCESS!!!" + " " + currentChar.innerText);
		currentChar.setAttribute("class", "correct");    //setAttribute just overides the current class
		//currentChar.classList.add("correct");
		//currentChar.classList.remove("wrong");
	}else{
		console.log("falied!!!");
		currentChar.setAttribute("class", "wrong");
		//currentChar.classList.add("wrong");
		//currentChar.classList.remove("correct");
		
	}
}


document.addEventListener('keydown', keyHandler);
