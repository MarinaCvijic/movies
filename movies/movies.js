
var movies = [

{ 	name:"Pulp Fiction",
	image:"./img/Pulp-Fiction.jpeg"
},
{
	name:"Inception",
	image:"./img/inception.jpeg"

},
{
	name:"Trainspotting",
	image:"./img/Trainspotting.jpeg"

},
{
	name:"Clockwork Orange",
	image:"./img/ClockworkOrange.png"
},
{
	name:"Nightcrawler",
	image:"./img/nightcrawler.jpeg"
},
{
	name:"In time",
	image:"./img/intime.jpeg"
},
{
	name:"Avatar",
	image:"./img/avatar.jpeg"
},
{
	name:"Borat",
	image:"./img/borat.jpeg"
},
{
	name:"Look Who's Back",
	image:"./img/lookWhoisBack.jpeg"
},
{
	name:"To Rome with Love",
	image:"./img/toRomewithLove.jpeg"
},
{
	name:"Lock,Stock and Two Smoking Barrels",
	image:"./img/twoSmokingBarrels.jpeg"
},
{
	name:"Beetlejuice",
	image:"./img/Beetlejuice.jpeg"
},
{
	name:"Monty Python's Life of Brian",
	image:"./img/montypython_s_Brian.jpeg"
},
{
	name:"The Monster",
	image:"./img/the monster.jpeg"
},
{
	name:"The Troops of St.Tropez",
	image:"./img/theTroopsOfSt.Tropez.jpeg"
},
{
	name:"The Handmaiden",
	image:"./img/handmaiden.jpeg"
},
{
	name:"The Parasite",
	image:"./img/parasite.jpeg"
}];

document.querySelector('div');
document.querySelector('input');
var ul = document.querySelector('ul');

function addElements(){

		for(var i=0; i < movies.length; i++){
			var movie = document.createElement('li');
			movie.setAttribute('class', 'movies');

			movie.innerHTML = '<img src= "' + movies[i].image + '"> <span>' +  movies[i].name + '</span>'
			ul.append(movie);
	
		}

		
		
	}

var moviesList = document.getElementById('moviesList');
var searchBar = document.getElementById('searchBar');


searchBar.addEventListener('keyup', function(e){

	var searchString = e.target.value.toLowerCase();
	var filteredMovies = moviesList.getElementsByTagName('li');

	for(var i = 0; i <filteredMovies.length; i++){
		var span;
		span = filteredMovies[i].getElementsByTagName('span')[0];
		var txt = span.textContent || span.innerText;
		if(txt.toLowerCase().indexOf(searchString) > -1){
			filteredMovies[i].style.display = "";
		} else { filteredMovies[i].style.display = "none";
	}

	}





});

addElements();