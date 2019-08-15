var myarr =[];
function addTo() {
	myarr.push(document.getElementById("userinput").value);
	console.log(myarr);
	
	document.getElementById("resultArray").innerHTML = myarr;
	
}


function takeAway(){
	myarr.pop(document.getElementById("userinput").value);
	document.getElementById("resultArray").innerHTML = myarr;
}
function New() {
let upNext = myarr[Math.floor(Math.random() * myarr.length)]

document.getElementById("Random").innerHTML = upNext;



}
//for(var i = 0, 1 <= myarr.length,i++){
	//if(i = upNext){
	//	myarr.filter(upNext);
	//}
//}