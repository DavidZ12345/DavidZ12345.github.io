var factOne = "Jellyfish can sting with their tentacles if they brush against you when you're swimming in the ocean. You also can get stung if you step on a jellyfish, even a dead one. Usually, jellyfish stings will hurt, but are not emergencies. <img src='images/jellyfish.jpg' alt='Jellyfish'>";

var factTwo = "In archery the term bullseye is not used, the centre being referred to as the Gold. Hitting the most central ring of an international target is worth 10 points, or an Imperial target 9 points in target archery. In darts it is 5 foot 8 inches (1.73m) above the floor. <img src='images/arrows.jpg' alt='Arrows'>";

var factThree = "In 1992, Bayer and Diaconis showed that after seven random riffle shuffles of a deck of 52 cards, every configuration is nearly equally likely. Shuffling more than this does not significantly increase the 'randomness'; shuffle less than this and the deck is 'far' from random. <img src='images/cards.jpg' alt='Cards'>";

var factFour = "We know that bees have been producing honey as they do today for at least 100 million years (since the Cretaceous period)*. Bees produce honey as food stores for the hive during the long months of winter when flowers aren't blooming and therefore little or no nectar is available to them. <img src='images/bees.jpg' alt='Bees'>";

var factFive = "A polar bear's head is oblong and relatively small compared to body size. The muzzle is elongated with a 'Roman-nosed' (slightly arched) snout. Polar bears have 42 teeth, which they use for catching food and for aggressive behavior. They use their incisors to shear off pieces of blubber and flesh. <img src='images/polarbear.jpg' alt='Polar Bear'>";

var fD = document.getElementById("factDisplay");
var f = document.getElementById("fact");

f.a.addEventListener("click",factOneDisplay);

function factOneDisplay(){
	fD.innerHTML = factOne;
	f.a.style.backgroundColor = "#00B4D8";
	f.b.style.backgroundColor = "#00B4D8";
	f.c.style.backgroundColor = "#00B4D8";
	f.d.style.backgroundColor = "#00B4D8";
	f.e.style.backgroundColor = "#00B4D8";
	f.a.style.color = "#03045E";
	f.b.style.color = "#03045E";
	f.c.style.color = "#03045E";
	f.d.style.color = "#03045E";
	f.e.style.color = "#03045E";
	document.body.style.background = "#CAF0F8";
	fD.style.backgroundColor = "#90E0EF";
	fD.style.color = "#03045E";
	document.getElementById("factDisplay").style.borderColor = "#0077B6";
	document.getElementById("fact").style.borderColor = "#0077B6";
	document.main.style.borderColor = "#0077B6";
}

f.b.addEventListener("click",factTwoDisplay);

function factTwoDisplay(){
	fD.innerHTML = factTwo;
	f.a.style.backgroundColor = "#E07A5F";
	f.b.style.backgroundColor = "#E07A5F";
	f.c.style.backgroundColor = "#E07A5F";
	f.d.style.backgroundColor = "#E07A5F";
	f.e.style.backgroundColor = "#E07A5F";
	
	f.a.style.color = "#3D405B";
	f.b.style.color = "#3D405B";
	f.c.style.color = "#3D405B";
	f.d.style.color = "#3D405B";
	f.e.style.color = "#3D405B";
	document.body.style.background = "#F2CC8F";
	fD.style.backgroundColor = "#F4F1DE";
	fD.style.color = "#3D405B";
	document.getElementById("factDisplay").style.borderColor = "#81B29A";
	document.getElementById("fact").style.borderColor = "#81B29A";
	document.main.style.borderColor = "#81B29A";
}

f.c.addEventListener("click",factThreeDisplay);

function factThreeDisplay(){
	fD.innerHTML = factThree;
	f.a.style.backgroundColor = "#FB8B24";
	f.b.style.backgroundColor = "#FB8B24";
	f.c.style.backgroundColor = "#FB8B24";
	f.d.style.backgroundColor = "#FB8B24";
	f.e.style.backgroundColor = "#FB8B24";
	
	f.a.style.color = "#9A031E";
	f.b.style.color = "#9A031E";
	f.c.style.color = "#9A031E";
	f.d.style.color = "#9A031E";
	f.e.style.color = "#9A031E";
	document.body.style.background = "#FB8B24";
	fD.style.backgroundColor = "#9A031E";
	fD.style.color = "#E36414";
	document.getElementById("factDisplay").style.borderColor = "#E36414";
	document.getElementById("fact").style.borderColor = "#E36414";
	document.main.style.borderColor = "#E36414";
}

f.d.addEventListener("click",factFourDisplay);

function factFourDisplay(){
	fD.innerHTML = factFour;
	f.a.style.backgroundColor = "#A3B18A";
	f.b.style.backgroundColor = "#A3B18A";
	f.c.style.backgroundColor = "#A3B18A";
	f.d.style.backgroundColor = "#A3B18A";
	f.e.style.backgroundColor = "#A3B18A";
	
	f.a.style.color = "#3A5A40";
	f.b.style.color = "#3A5A40";
	f.c.style.color = "#3A5A40";
	f.d.style.color = "#3A5A40";
	f.e.style.color = "#3A5A40";
	document.body.style.background = "#A3B18A";
	fD.style.backgroundColor = "#588157";
	fD.style.color = "#A3B18A";
	document.getElementById("factDisplay").style.borderColor = "#344E41";
	document.getElementById("fact").style.borderColor = "#344E41";
	document.main.style.borderColor = "#344E41";
}

f.e.addEventListener("click",factFiveDisplay);

function factFiveDisplay(){
	fD.innerHTML = factFive;
	f.a.style.backgroundColor = "#FFD670";
	f.b.style.backgroundColor = "#FFD670";
	f.c.style.backgroundColor = "#FFD670";
	f.d.style.backgroundColor = "#FFD670";
	f.e.style.backgroundColor = "#FFD670";
	
	f.a.style.color = "#FF70A6";
	f.b.style.color = "#FF70A6";
	f.c.style.color = "#FF70A6";
	f.d.style.color = "#FF70A6";
	f.e.style.color = "#FF70A6";
	document.body.style.background = "#FF9770";
	fD.style.backgroundColor = "#E9FF70";
	fD.style.color = "#FF70A6";
	document.getElementById("factDisplay").style.borderColor = "#70D6FF";
	document.getElementById("fact").style.borderColor = "#70D6FF";
	document.main.style.borderColor = "#70D6FF";
}