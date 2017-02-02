console.log("RSP script imported!!!");


function init(){

video =document.getElementById("video");

}

function yes(){
	console.log("yes works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	video.src = "food.mp4";
	video.currentTime="25";
	video.loop="true";
	console.log("currentTime works");
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML="Sitting at a fancy resturant, you are thinking of ordering....";
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("burger").innerHTML = '<button class="burger" onclick="burger()">Burgers</button>';
	document.getElementById("vegetable").innerHTML = '<button class="vegetable" onclick="vegetable()">Vegetables</button>';
}
	

function burger(){
	console.log("burger works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML=""
	document.getElementById("burger").innerHTML = "";
	document.getElementById("vegetable").innerHTML = "";
	video.src = "Burger.mp4";
	video.currentTime="3";
	video.loop="true";
	document.getElementById("burgerText").innerHTML="  Now you're full. But...More burgers?";
	document.getElementById("nope").innerHTML = '<button class="nope" onclick="nope()">Nope I quit</button>';
	document.getElementById("hellya").innerHTML = '<button class="hellya"onclick="hellya()">Hell Yeah! Me Want Food</button>';


}

function nope(){
	console.log("nope works");
	console.log("burger works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML=""
	document.getElementById("burger").innerHTML = "";
	document.getElementById("vegetable").innerHTML = "";
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("nope").innerHTML = "";
	document.getElementById("playagain").innerHTML = '<button class="playagain" onclick="playagain()">After made a smart diet decision. You are perfectly healthy ever after!!</button>';
	video.src = "Congratulations.mp4";
	video.loop="true";
	document.getElementById("hellya").innerHTML = "";


}

function hellya(){
	console.log("hellya works");
	console.log("no works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML=""
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("burger").innerHTML = ""
	document.getElementById("vegetable").innerHTML = "";
	document.getElementById("nope").innerHTML = "";
	document.getElementById("hellya").innerHTML = "";
	document.getElementById("playagain").innerHTML = '<button class="playagain" onclick="playagain()">You then become overweight and soon are diagnosed with diabete. </button>';
	video.src = "Sick.mp4";
	video.currentTime="10";
	video.loop="true";
}


function vegetable(){
	console.log("vegetable works");
	console.log("nope works");
	console.log("burger works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML=""
	document.getElementById("burger").innerHTML = "";
	document.getElementById("vegetable").innerHTML = "";
	video.src = "Vegetables.mp4";
	video.loop="true";
	video.currentTime="6";
	document.getElementById("vegeText").innerHTML="You already had some vegetables and you are wondering if you should get more.";
	document.getElementById("moreVege").innerHTML = '<button class="moreVege" onclick="moreVege()">Yas yas more vegetables!!</button>';
	document.getElementById("nomore").innerHTML = '<button class="nomore" onclick="nomore()">Ugh no more...just..no..</button>';
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("nope").innerHTML = "";
	document.getElementById("hellya").innerHTML = "";
}

function moreVege(){
	console.log("moreVege works");
		console.log("vegetable works");
	console.log("nope works");
	console.log("burger works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("text").innerHTML=""
	document.getElementById("burger").innerHTML = "";
	document.getElementById("vegetable").innerHTML = "";
	document.getElementById("vegeText").innerHTML=""
	video.src = "Congratulations.mp4";
	video.loop="true";
	document.getElementById("playagain").innerHTML = '<button class="playagain" onclick="playagain()">You eat more vegetables and become perfectly fit. Later, you got discovered by a worldwide modelling agecy and become a world famous model!!</button>';
	document.getElementById("nomore").innerHTML = "";
	document.getElementById("moreVege").innerHTML = "";
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("nope").innerHTML = "";
	document.getElementById("hellya").innerHTML = "";


}


function nomore(){
	console.log("nomore works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
    document.getElementById("moreVege").innerHTML = "";
    document.getElementById("text").innerHTML=""
	document.getElementById("nomore").innerHTML = "";
	document.getElementById("introText").innerHTML="";
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("burger").innerHTML = ""
	document.getElementById("vegetable").innerHTML = "";
	document.getElementById("vegeText").innerHTML=""
	document.getElementById("playagain").innerHTML = '<button class="playagain" onclick="playagain()">You are diagnosed with cancer for not eating enough vegetables..</button>';
	video.src = "Crying.mp4";
	video.currentTime="180";
	video.loop="true";

}


function no(){
	console.log("no works");
	document.getElementById("select").innerHTML="";
	document.getElementById("select").innerHTML="";
	document.getElementById("introText").innerHTML="";
	document.getElementById("burgerText").innerHTML="";
	document.getElementById("burger").innerHTML = ""
	document.getElementById("vegetable").innerHTML = "";
	document.getElementById("playagain").innerHTML = '<button class="playagain" onclick="playagain()">Bummer!! You are soon diagnosed with cancer due to lack of nutrition</button>';
	video.src = "Sad.mp4";
	video.loop="true";


}


function playagain(){
	console.log("playagain");
	location.reload();
}

window.onload =init();
