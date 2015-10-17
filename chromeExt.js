var images = document.querySelectorAll('img');

var helloKitteh = ['https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTdtkyyVbXr52ECGDOJYZ8qW9WE80Nj0Pu5_jrFPrtXrVktQMn7Mw','https://s-media-cache-ak0.pinimg.com/736x/14/08/41/140841f3a3baabf8f3362d995735ea97.jpg','https://thestyleofme.files.wordpress.com/2011/03/hello_kitty_sign_shaped_heart.jpg', 'https://pbs.twimg.com/profile_images/553014757037322240/VhIzHhkV_400x400.png', 'https://s-media-cache-ak0.pinimg.com/736x/18/58/86/1858862ce632813ef94d62965f08c271.jpg', 'https://s-media-cache-ak0.pinimg.com/736x/82/d7/82/82d782043c3451107d4a563d5c684f9c.jpg', 'https://lampukecildotcom.files.wordpress.com/2014/11/gambar-hello-kitty-lucu-84.jpg?w=500&h=786']

var animated = ['http://i42.tinypic.com/rblbat.jpg', 'https://media.giphy.com/media/kZqbBT64ECtjy/giphy.gif', 'http://www.hawaiikawaii.net/wp-content/uploads/2012/02/Hello-Kitty-DJ-Animation-Kawaii-Hello-Kitty-Blog.gif', 'http://www.animaatjes.nl/plaatjes/h/hello-kitty-emo/jgs8rp19196.jpg', 'http://image.blingee.com/images19/content/output/000/000/000/7a3/760711178_922589.gif', 'http://gfx.glittergraphicsnow.com/albums/ll149/glittergn/hellokitty/hellokitty006.gif']

var kitty = document.createElement('div');
kitty.innerHTML = "<img src=" + animated[1] + "/>";
kitty.position = "absolute";
// kitty.top = kitty.left = "10%";
document.body.appendChild(kitty);

alert('Party Time!');

var colorChangeSpeed = 500;



function getRandColor(brightness){
   //6 levels of brightness from 0 to 5, 0 being the darkest
   var rgb = [Math.random() * 256, Math.random() * 256, Math.random() * 256];
   var mix = [brightness*51, brightness*51, brightness*51]; //51 => 255/5
   var mixedrgb = [rgb[0] + mix[0], rgb[1] + mix[1], rgb[2] + mix[2]].map(function(x){ return Math.round(x/2.0)})
   return "rgb(" + mixedrgb.join(",") + ")";
 }

var changeColors = setInterval(function(){

	document.getElementById('globalContainer').style.backgroundColor = getRandColor(5);
	document.getElementById('rightCol').style.backgroundColor = getRandColor(5);
	document.getElementById('contentArea').style.backgroundColor = getRandColor(5);
	document.getElementById('blueBarNAXAnchor').style.backgroundColor = getRandColor(5);
	document.getElementById('u_0_1j').style.backgroundColor = getRandColor(5);
	document.getElementById('globalContainer').style.color = getRandColor(5);
	document.getElementById('contentArea').style.backgroundColor = getRandColor(5);
	// document.getElementsByClassName('_5wd4').style.backgroundColor = getRandColor(5);

}, colorChangeSpeed);



/*---------------------
not working yet
----------------------*/
document.addEventListener('DOMContentLoaded', function(){
	var checkPageButton = document.getElementById('checkPage');
	checkPageButton.addEventListener('click', function() {
		console.log("Hello Kitty Party Time!");
		clearInterval(changeColors);	
	});
});

// var music = "<audio autoplay><source src='02_Yeah.mp3' type='audio/mpeg'></audio>";

// document.body.innerHTML = music;


/*---------------------
Replaces Images
----------------------*/
function replaceImages(){
	var images = document.querySelectorAll('img');
	for (var i = 0; i < images.length; i++){
		image = images[i];
		var index = Math.floor(Math.random()*5);
		image.src = helloKitteh[index];
	}
}


function replaceSpans(){
	var spans = document.querySelectorAll('span');
	for (var i = 0; i < spans.length; i++){
		span = images[i];
		image.text = "HELLO KITTY!!!";
	}
}

setInterval(function(){
	replaceImages();
	replaceSpans();
}, 1000);



document.getElementById('globalContainer').addEventListener('click', function(){
	alert('Yeah Right! Still Party Time!');
})

// images.href = images.getAttribute(href);
// images.download = images.getAttribute(href);
// document.body.appendChild(link);
// images.click();