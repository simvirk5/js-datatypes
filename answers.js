// const lightSwitch = {
// 	on: 'true',
// 	}
// i.e. Boolean
// const userInfo = {
// 	name: "x",
// 	emailaddress: "johndoe@gmail.com"
// }
// i.e. Boolean, string, object, array

// const spaceship = [
// 	{hull: "true",
// 	laser: "false",
// 	tractorbeam: "low",
// 	warpdrive: "none",
// } ]
// i.e. string, array, object

// const namesOfStudents = {
// 	[name: '', location: '', favoriteShow: '']}
// i.e. strings, arrays within an object, use (sort) function



const rainbow = ["indigo", "red", "orange", "yellow", "blue", "green", "violent"]
rainbow[4];

const introduce = {
	name: "Simmy",
	food: "tacos",
	hobby: "dance",
	residence: "bothell",
	datatype: "objects",
}
console.log(introduce);
introduce.hobby

console.log(crazyObject.tacos[1].salsa[5]);
console.log(crazyObject.larry.quotes[0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject.larry.characters);


inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

const bondTitles = [];

for (var i = 0; i<bondFilms.length; i++) {
  console.log(bondFilms[i].title);
  bondTitles.push(bondFilms[i].title)
}

console.log(bondTitles);

const oddbonds =[];
if ( var i = 0; i<bondTitles.length; i++) {
	console.log( i % 2 !== 0);
}

