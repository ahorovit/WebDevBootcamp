
function printMovie(movie)
{
	var output = "You have ";

	if (movie.is_seen)
	{
		output += "watched ";
	}
	else 
	{
		output += "not seen ";
	}

	output += '"' + movie.title + '" - ' + movie.rating + ' stars'

	console.log(output);
}


var movies = [
	{
		title: "JAWS",
		is_seen: false,
		rating: 4
	},
	{
		title: "Star Wars",
		is_seen: true,
		rating: 5
	},
	{
		title: "Tremors",
		is_seen: false,
		rating: 1
	},
	{
		title: "Blues Brothers",
		is_seen: false,
		rating: 4
	},
];

movies.forEach(printMovie);